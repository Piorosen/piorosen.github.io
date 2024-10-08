---
layout: post
title: SSH 기반 VPN 클라이언트 sshutle(SSH Over VPN)
author: piorosen
categories: [Program, Review]
tags: [ssh, vpn, ssh-over-vpn, ssh-client, dns, internal-network]
hide_title: false
---

# 개요

항상, 무언가에 막힌다면 새로운 아이디어를 통해 헤쳐나가는 것이 중요하다 생각이 들곤 한다. 특히, 동의대학교의 정보 보안 도구는 비싼것을 쓰는 것인지, 보안 규칙이 하드하게 잡혀있는진 잘 모르겠지만, 외부에서 내부간 통신을 할 때 대부분 교내 방화벽에 의해 막혀있다. (e.g. UDP 통신, Well-Knwon 포트, 1만번 이상의 포트) 그래서 DNS를 구축하거나, VPN 서버를 따로 구축하는 것은 불가능하였다. (DNS는 서버가 생존하고 있는지 UDP로 헬스 체크를 수행하므로, VPN은 최신 프로토콜의 경우 대부분 UDP 기반으로 통신을 수행한다. TCP로 통신하는 것이 하나 있긴 하나, 맥에선 미지원하고, 보안상 문제로 사용이 금시되는 분위기이다.) 

그래서 교내에 VPN을 설치하기 위해서 다양한 고민을 하였고, 이를 위해서 어떻게 하면 많은 학생들과 회의하면서 최선책을 생각하게 되었다. 그 결과 SSH 기반으로 채택하게 되었다. 이유로는 SSH에는 기본적으로 포트포워딩이란 개념이 존재하는데, 이는 클라이언트의 포트와 내부망의 특정 컴퓨터의 포트와 맵핑 시키기 위해 쓰이는 기술이다. 이를 활용하여 사용되는 곳은 FTP, VNC가 대표적으로 사용되고 있다. (ps. SFTP가 FTP + SSH 기반이고, FTPS가 FTP + OpenSSL로 암묵적으로 불려지는것 같다.)

SSH 기반으로 UDP 포트를 맵핑시켜 VPN을 실행시키는 마법적인 프로그램이 있지 않을까? 라는 생각을 하였고 이 과정에서 SSH Over VPN 프로그램 중 하나인 sshutle이란 프로그램을 만나게 되었다.

# 장/단점

[sshutle](https://github.com/sshuttle/sshuttle) 이란 프로그램은 기본적으로 SSH 클라이언트이므로, SSH 서버가 설치가 되어있는 환경이라면 어디서든지 사용할 수 있는 장점이 있다. 

단점으로는 SSH 서버의 비밀번호가 유출이 되었을 때, 내부망 전체가 공개가 될 수 있는 취약점이 된다는 것과 어찌보면 보안 취약점을 기반으로한 기술이지 아니할까 싶은 생각이 있다. 이는 VPN 또한 계정이 유출되면 내부망이 공개가 된다는 것 또한 비슷하다.

# 필자의 적용 사례

필자의 경우 아래의 명령어를 기반으로 내부망에 접근하도록 하였다. `--dns`를 통해 내부 DNS서버를 활용하고, `-vr` 에서 사용자 계정을 입력을 합니다. 마지막으로 `0/0`은 사용자가 서버에 접속 할 때, 어느 범위까지 포트포워딩, VPN의 역할을 수행하도록 할 것인지 지정 합니다. `0/0`은 전체 서버의 모두 다가 되고, 만약 서버가 `192.168.0.*` 이라면 `192.168.0.0/24`으로 지정 하시면 됩니다. 이러한 표기법은 CIDR 표기법이라 하고, IP 주소와 서브넷 마스크를 합친 표현 기법입니다.

```
sshuttle --dns -vr {UserID}@{ServerIP}:{SSHPort} 0/0
```

필자는 Kubernetes 서버에 SSH 서버를 설치하고, 쿠버네티스 서버의 서버에 접속하는 용도로 활용하였습니다. 이를 통해 쿠버네티스의 서비스 들인, `deployment.namespace.svc.cluster.local` 에 접속이 가능해지므로 엄청 유용해 지기 떄문입니다.

그렇게 되면 `쿠버네티스`의 `포트포워딩`없이 포트포워딩과 동일한 효과를 얻을 수 있으므, 편리하고, 따른 설정이 없어도 되는 장점이 있습니다.

그 외에 외부에서 급히, 공유기를 사용해야할 때, 위의 `sshutle`을 이용하여 공유기 화면에 접근을 하는 등 유용하게 활용이 가능합니다.

# 결론

백도어가 필요하다면 역시 SSH만 설치하더라도 충분하고, 최고입니다.
