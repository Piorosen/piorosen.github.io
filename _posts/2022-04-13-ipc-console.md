---
layout: post
title: Pipe를 이용한 다른 프로그램간 통신
categories: [Blogging, Develop]
author: piorosen
tags: [ipc, console, dotnet, os, process, gui, cui]
hide_title: false
---

# 개요
교수님과 함께 프로젝트 진행 중인 연구과제에서 교수님이 짜신 프로그램에 GUI(Graphical User Interface)를 올려야하는 상황이였다. 그렇다보니 Console 프로그램과 Console과 통신을 통해 GUI를 나타낼 기능 구현 해야 했다. 기존 기능을 유지하고, 큰 틀이나 다른 라이브러리를 추가하지 않고, 따로 수정을 하지 않았을 때 간편하고 빠른 통신 방법을 찾아야 했다.

# Inter-Process Communication(IPC) 란?

IPC는 프로세스 간 통신을 의미 하며, 프로세스간 통신을 하기 위해서 사용이 됩니다. 프로세스가 다른 프로세스의 메모리 침범 하여 다른곳에 직접적으로 값을 변경하거나, 삭제하는것은 불가능에 가깝습니다. 커널이 프로세스의 메모리를 보호하고 관리 하기 때문입니다. 그래서 서로 프로세스간 통신을 하기 위해서 IPC라는 기법, 기술이 필요 합니다. IPC는 내부적으로 프로세스간 통신을 위한 기법으로 아래의 기법이 있습니다.

> 1. 공유 메모리
> 2. 세마포어
> 3. 메시지 큐
> 4. 네트워크
> 5. 파이프
> 6. Remote Procedure Call(RPC) 

등 다양한 기능이 있습니다.

그 중 특별히 다른 기법이 필요하지 않고, 다른 라이브러리를 쓰지 않으며, 기존의 코드를 그대로 유지 할 수 있는 방법인 5번 기법인 파이프라인을 이용해 통신을 주고 받기로 하였습니다.

# Pipe를 통한 통신

모든 프로그램은 본질적으로 Console이며, 일상 생활에서 GUI만 보이는 것은 Console을 표시 하지 않고 GUI 환경만 보여주는 설정이 되어 있기 때문입니다. 그렇기 때문에 모든 프로그램은 내부적으로 Console을 가지고 있습니다. 특히 리눅스는 모든 프로그램은 콘솔, 터미널 기반으로 동작하기 떄문에 콘솔이 없는 프로그램은 찾기가 매우 어렵습니다. 흔히 printf 란 함수를 찾아보게 되면 fprintf(stdout) 을 통해 동작이 됩니다. GUI 프로그램 (C# 기준 Console.WriteLine)도 콘솔 입출력이 따로 지원하고 있으며, GUI를 나타내면서 CUI를 나타낼 수 있습니다.

그래서 콘솔 입출력을 통해 큰 코드의 변화 없이 규칙을 만들어서 사용하기로 하였습니다.

# 통신 규약(프로토콜 정의)

교수님의 프로그램과 GUI 프로그램을 서로 만들어서 유기적으로 동작하게 하기 위해서는 통신 규약을 정해야 했습니다. 가장 먼저 정의를 했던 것은 stdout, stderr, stdin 3가지의 역할을 정하였습니다.

> 1. stdout은 내부적으로 디버깅 및 로그를 남기기 위해서 출력 함.
> 2. stderr은 GUI와 통신 하기 위해서 결과물을 출력 함.
> 3. stdin은 GUI에서 필요한 입력을 주고 받음.

그 외에 stdin에서 데이터를 입력 할 때 주고 받는다거나, 등등... 다양하게 주고 받을 수 있습니다.

# Pipe를 이용한 IPC 다른 예

또 다른 예로는 ffmpeg를 통해서 인, 디코딩을 진행 할 때 진행 상황을 stderr로 출력되는걸 확인 하고 파싱 하면서 현재 진행 상황을 gui로 출력이 가능합니다. 기존 소프트웨어를 큰 변함을 주지 않고 바로 적용이 가능한 것이 Pipe를 이용한 통신이 유용합니다.

# 추가적인 마지막 말

크게 문제가 되지 않는다면 네트워크를 통해서 하는것이 제일 베스트 인것 같습니다. 왜냐하면 하나의 PC에서 동작을 한다면 CUI가 크게 문제가 되지 않지만 다른 컴퓨터로 확장이 된다면 네트워크로 가는것도 좋은것 같습니다. 

[![aaa](/assets/img/post/2022-04-13-image1.png)](https://github.com/Piorosen/DotNetAudio2Tag/blob/master/Tag.Core/Conv/Library/User2Mp3.cs)