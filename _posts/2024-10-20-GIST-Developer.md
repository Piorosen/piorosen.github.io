---
layout: post
title: GIST Developers' Night 2024에 연사로 참가하고 나서
author: piorosen
categories: [Blogging, Present]
tags: [gist,dev-night,presenter,]
hide_title: false
math: true
---

# 개요

먼저, GIST 개발자의 밤에 연사로 참여할 수 있게 되어 감사의 인사를 드립니다. 그리고 발표 자료나, 행사 사진에 관련해서는 따로 리포지토리를 생성하여 관리를 하고 있어 다운로드해서 보셔도 괜찮습니다.

[[깃허브 리포지토리]](https://github.com/Piorosen/2024-GIST-Developers-Night) 

연사로 참여하여 발표하게 된 내용은, 제가 이전에 논문을 쓰면서 알게 된 내용을 기반으로 작성하였습니다. 스마트폰에서 우분투를 올릴 수 없을까? 그리고 스마트폰은 왜 임베디드 시스템으로 역할을 할 수 있지 않을까? 라는 의문을 가지게 되었고 실증을 해본 결과 가능하다는 것을 알게 되었습니다. 이를 통해 모두, 스마트폰으로 서버를 만들 수 있다면 얼마나 서버 비용을 낮추고 배터리까지 탑재된 고 성능 서버를 얻게 될 수 있을거라 생각했습니다.

깃허브 리포지토리에 행사 포스터와 행사 일정이 자세하게 나와 있으므로, 해당 블로그 내용에는 굳이 업로드 하지 않을 예정입니다. (깃허브의 공간의 부족의 문제와 이것 저것 문제가 이제 고려해야할 단계가 오고 있기 때문에 그렇습니다.)

# Table of Content in Post

1. GIST Developer Ninght의 분위기와 후기
3. 발표 내용 요약
4. 본 발표를 통해 얻은 영감 및 결론

# GIST Developer Ninght의 분위기

발표 장소와 대화할 수 있는 공간이 별도로 마련이 되어 있었기 때문에, 발표를 듣고 싶은 사람과 소통을 하고 싶은 사람간에 대화 할 수 있는게 정말로 좋았다. 백엔드 부터 인프라, 회사에 다니고 있거나 창업하신 분과 대화를 개발 이란 주제로 나눌 수 있었다. 대부분 발표의 내용이 쉽운 주제로 선정이 되어있었기 때문에 많은 사람들이 들을 수 있었던 것 같다라고 생각한다.

필자의 경우에는 `더 이상은 라즈베리 파이를 그만 사용하고, 우리들의 스마트폰을 이용하자.`란 주제로 선정한 덕분인지는 잘 모르곘지만, 많은 사람들이 관심을 가져준 것이 정말로 좋았다. 실제로, 준비한 세션에서 시연과 함께 따라 할 수 있게 만들었는데, 직접 스마트폰으로 서버를 열고 테스트를 해주신 분들이 있어 정말로 고마웠다. 그 정도로 많은 사람들이 관심과, 세션을 잘 따라와주었다. 

# 발표 내용 요약

가장 추천을 드리는 것은, 발표 PPT 또는 PDF를 다운로드 받아서, 보는것이 제일 좋다. [[다운로드 PDF]](https://github.com/Piorosen/2024-GIST-Developers-Night/raw/refs/heads/main/presentation_2024.09.28.pdf) 그렇지만, 간단하게 요약이 필요한 독자도 있을 것이 분명하기에, 간단하게 요약을 하고자 한다.

발표에서 전달하고 싶은 내용은 단 한가지이다. 리눅스가 설치된 시스템은 표준화된 하나의 시스템에서 동작한다는 것을 의미한다. 즉, 리눅스가 설치된 모든 시스템은 CPU만 다르다는 것이다. 그리고 모든 프로그램은 누군가가 작성한 소스코드로부터 동작한다는 것이다. 

이해가 어렵다면, 리눅스에 있는 모든 소프트웨어는 누군가가 만들어 놓은 소프트웨어라는 것을 잊지 않는다면 된다. 공유기에 올라간 운영체제 또한, 소프트웨어라는 것을 이해만 한다면, 우리는 공유기에 새로운 소프트웨어를 설치가 가능하다라는 것이다.

이를 기반으로, 안드로이드 운영체제를 타겟으로 한 `Termux` 프로젝트가 있다. `Termux`는 `GCC`, `Python`, `NodeJS`를 빌드하여 배포하는, 일종의 패키지 매니저를 수행한다. 일부 글에서는, `Termux`를 에뮬레이터 / 시뮬레이터, 가상화 도구라고 표현이 되어있지만, 그것이 아니다. 만약 에뮬이나 시뮬레이터와 같은 존재였다면, 안드로이드의 `ADB`에서 `Termux`에서 설치한 `Python`이 실행이 되어선 안된다. 그러나 정상적으로 실행하고 동작이 가능하고, 이를 기반으로 서버 역할도 가능하다.

`Termux`와 `ADB`를 통해 안드로이드를 안드로이드가 아닌 하나의 리눅스 시스템으로 만들 수 있으며, 하나의 `AWS의 Graviton`과 같은 시스템을 만들 수 있음을 시사한다. 스마트폰에는 배터리, 고 성능 CPU, 디스플레이가 있음을 이해한다면 매우 저렴한 임베디드 보드로 충분히 활용이 가능하며, 서버로도 사용이 가능하다. 그래서, 필자는 더 이상 라즈베리파이를 그만 구매하고, 스마트폰으로 서버를 실행한다면 매우 멋진 프로젝트가 되지 않을까? 라는 생각을 하여 발표하게 되었다.

# 후회

발표 자료를 준비와 발표는 큰 문제가 없었지만, 조금 더 이 주제로 대해서 미리 더 공부를 했다면 좋았었을 텐데 라는 후회가 크다.
개념을 확장해서 더 확장해서 이게 왜 가능한지, 다른 시스템에서는 가능하지 않을까? 라는 내용을 전달하지 못해 아쉽다. 

필자가, 해당 주제로 [(사) 임베디드 공학회 춘계 학술대회](https://iemek.org/Conference/ConferenceView.asp?top_param=4&sub_param=1&AC=0&CODE=CC20240802) 논문으로 작성하면서, 필자가 정말로 많은 부족함이 있었구나. 라는 것을 알게 되면서 후회가 정말로 컸다.

근간이 되는 기술이 1987년의 초기 형태의 컨테이너를 기반으로 한다면, 그리고 리눅스 커널만 존재한다면 `어떠한 시스템`에서도 된다는 것을 알게되었을 때 아쉬움이 크게 다가왔다. 이후에 실험을 해본 결과, MIPS 계열(RISC-V CPU 종류 중 하나)를 탑재한 IPTime 공유기에서 우분투가 올라가고 파이썬이 설치가 된다는것 알았을 때, 얼마나 큰 공허감이 생겼겠는가. 이를 실증하고 테스트하기 위해 리포지토리를 생성하여 관리하고 있다. [[Ubuntu on Router of IPTime]](https://github.com/Piorosen/iptime-to-ubuntu)이 얼마나 어이가 없는가. 공유기에 우분투가 올라가는 것을 테스트 해보는 것은 제 정신이 아니라면 하지 않을 것이다.

단, 필자는 연구자이며 실험하기 위한 테스트 보드로 MIPS 계열의 CPU가 생겼다는 것은 새로운 논문의 이점이 되기도 한다.
그 어느 누가, 공유기에 탑재된 매우 초 저성능 CPU, RISC-V에 TVM이라던가, LaMMa3.2를 돌려보고 실험하고 최적화를 하겠는가. 그게 바로 필자가 된다면, 재밌을 것 같았다. 백서든, 리포트든, 필자는 재미로 움직이기 때문이다. 