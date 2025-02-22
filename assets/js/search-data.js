// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A growing collection of your cool projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "Edit the `_data/repositories.yml` and change the `github_users` and `github_repos` lists to include your own GitHub profile and repositories.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-위노그라드-알고리즘-정리",
      
        title: "위노그라드 알고리즘 정리",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/Winograd-Algorithm/";
        
      },
    },{id: "post-외부에서-내부망으로-접근하기-위한-3가지의-방법론",
      
        title: "외부에서 내부망으로 접근하기 위한 3가지의 방법론",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/ssh-vpn-forward/";
        
      },
    },{id: "post-gist-developers-39-night-2024에-연사로-참가하고-나서",
      
        title: "GIST Developers&#39; Night 2024에 연사로 참가하고 나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/GIST-Developer/";
        
      },
    },{id: "post-jvm-밑바닥까지-파헤치기-책을-읽고",
      
        title: "JVM 밑바닥까지 파헤치기 책을 읽고",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/jvm-book-readed/";
        
      },
    },{id: "post-고성능을-위한-언어-c-책을-읽고나서",
      
        title: "고성능을 위한 언어 C++ 책을 읽고나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/reading-High-Performance-Cpp/";
        
      },
    },{id: "post-programming-language-with-llvm-in-udemy-인강을-듣고-나서",
      
        title: "Programming Language with LLVM in Udemy 인강을 듣고 나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/frontend-of-llvm/";
        
      },
    },{id: "post-optimized-c-책을-읽고나서",
      
        title: "Optimized C++ 책을 읽고나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/my-comment-of-reading-optimized-cpp/";
        
      },
    },{id: "post-프로젝트-누가-더-빠르게-알고리즘-문제를-푸는가",
      
        title: "프로젝트, 누가 더 빠르게 알고리즘 문제를 푸는가?",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/algorithm-competition-with-my-girl-friend/";
        
      },
    },{id: "post-mnist-from-keras-h5-모델을-c-로-배포-컴파일",
      
        title: "MNIST from Keras H5 모델을 C++로 배포/컴파일",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/implemnt-mnist/";
        
      },
    },{id: "post-let-39-s-encrypt를-이용하여-시놀로지에-ssl-적용-w-certbot",
      
        title: "Let&#39;s Encrypt를 이용하여 시놀로지에 SSL 적용 (w/ Certbot)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/lets-encrypt-on-synology-with-txt-authorization/";
        
      },
    },{id: "post-운영체제마다-랜덤-함수의-결과가-다르다",
      
        title: "운영체제마다 랜덤 함수의 결과가 다르다!",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/why-diff-random-function/";
        
      },
    },{id: "post-awesome-unity-프로젝트에-기여에-성공하였다",
      
        title: "Awesome Unity 프로젝트에 기여에 성공하였다",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/contributor-from-awesome-unity-in-github/";
        
      },
    },{id: "post-on-premise-환경에서-harbor와-argocd-연동하기",
      
        title: "On-Premise 환경에서 Harbor와 ArgoCD 연동하기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/argocd-with-harbor/";
        
      },
    },{id: "post-다른-사람이-짠-oauth-코드를-프로젝트에-맞게-이식하기",
      
        title: "다른 사람이 짠 OAuth 코드를 프로젝트에 맞게 이식하기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/oauth/";
        
      },
    },{id: "post-pyguard-파이썬의-보안-취약점-검사-논문-읽기",
      
        title: "PyGuard 파이썬의 보안 취약점 검사 논문 읽기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/reading-paper/";
        
      },
    },{id: "post-논문-정리와-관리하기-위해-zotero와-resilio-sync-같이-활용하기",
      
        title: "논문 정리와 관리하기 위해 Zotero와 Resilio Sync 같이 활용하기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/cite-paper-for-pc-with-auto-sync/";
        
      },
    },{id: "post-온라인-sql-저지-개발을-위한-out-of-docker-기반-개발지",
      
        title: "온라인 SQL 저지 개발을 위한 Out of Docker 기반 개발지",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/deploy-and-using-out-of-docker/";
        
      },
    },{id: "post-동적-메타-헤더를-위해-리액트-코드에서-php-코드로의-전환",
      
        title: "동적 메타 헤더를 위해 리액트 코드에서 PHP 코드로의 전환",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/builded-react-code-to-server-side-php-code/";
        
      },
    },{id: "post-linux-on-hikey970-에서-높은-버전의-python3-8-설치-방법",
      
        title: "Linux on HiKey970 에서 높은 버전의 Python3.8 설치 방법",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/python3.8-for-hikey970/";
        
      },
    },{id: "post-c-언어에서-런타임에-코드를-생성하여-실행-jit-with-c",
      
        title: "C++언어에서 런타임에 코드를 생성하여 실행(JIT with C++)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/runtime-for-jit-with-cpp/";
        
      },
    },{id: "post-ssh-기반-vpn-클라이언트-sshutle-ssh-over-vpn",
      
        title: "SSH 기반 VPN 클라이언트 sshutle(SSH Over VPN)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/program-review-shuttle/";
        
      },
    },{id: "post-the-indirect-convolution-논문-리뷰",
      
        title: "The Indirect Convolution 논문 리뷰",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/paper-review-indirect-convolution/";
        
      },
    },{id: "post-안드로이드에서-메모리-동적-할당을-이용하면-커널-패닉이-발생하는-이유",
      
        title: "안드로이드에서 메모리 동적 할당을 이용하면 커널 패닉이 발생하는 이유",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/why-adb-kernel-panic/";
        
      },
    },{id: "post-mssql-dev를-설치-후-외부-도구-활용",
      
        title: "MSSQL-Dev를 설치 후, 외부 도구 활용",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/mssql-default-install/";
        
      },
    },{id: "post-메모리-동적-할당을-이용한-안드로이드-커널-패닉-유도",
      
        title: "메모리 동적 할당을 이용한 안드로이드 커널 패닉 유도",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/android-os-panic/";
        
      },
    },{id: "post-자동-근태-확인을-위한-자동화-시스템-구축",
      
        title: "자동 근태 확인을 위한 자동화 시스템 구축",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/automate-deploy/";
        
      },
    },{id: "post-정교한-충돌-검사를-위한-unreal-engine-엔진-커스텀",
      
        title: "정교한 충돌 검사를 위한 Unreal Engine 엔진 커스텀",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/customized-ue4/";
        
      },
    },{id: "post-안드로이드와-라즈베리파이에서-텐서플로우-연산-과정",
      
        title: "안드로이드와 라즈베리파이에서 텐서플로우 연산 과정",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/armnn-armcl/";
        
      },
    },{id: "post-exten-server-c-클라우드를-서버처럼-이용하기",
      
        title: "Exten Server, C# 클라우드를 서버처럼 이용하기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/cloud-server/";
        
      },
    },{id: "post-안드로이드-jvm의-중간-언어-byte-code-로-인한-취약점을-이용한-공격",
      
        title: "안드로이드/JVM의 중간 언어(Byte Code)로 인한 취약점을 이용한 공격",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/android-security-attack/";
        
      },
    },{id: "post-msa-구조를-이용한-백엔드-서버-개발",
      
        title: "MSA 구조를 이용한 백엔드 서버 개발",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/msa/";
        
      },
    },{id: "post-c-에서-gui-개발-후-dotnet과-함께-배포하기",
      
        title: "C#에서 GUI 개발 후 dotnet과 함께 배포하기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/dotnet-published/";
        
      },
    },{id: "post-npu와-gpu-그리고-인공지능-컴파일-최적화에-대한-고찰",
      
        title: "NPU와 GPU 그리고 인공지능 컴파일 최적화에 대한 고찰",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/ai-compiler/";
        
      },
    },{id: "post-알파제로를-분석하며-배우는-인공지능을-읽고-나서",
      
        title: "알파제로를 분석하며 배우는 인공지능을 읽고 나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/alphazero-ai/";
        
      },
    },{id: "post-unreal-engine의-에디터에서-반복성을-최소화하기-위한-툴-구현",
      
        title: "Unreal Engine의 에디터에서 반복성을 최소화하기 위한 툴 구현",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/unreal-engine-editor/";
        
      },
    },{id: "post-unity에서-구매한-에셋을-unreal-engine으로-변환",
      
        title: "Unity에서 구매한 에셋을 Unreal Engine으로 변환",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/unity-to-unreal/";
        
      },
    },{id: "post-coral-tpu를-c-과-cmake를-사용하여-추론-가속-방법",
      
        title: "Coral TPU를 C++과 CMake를 사용하여 추론 가속 방법",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/cmake-tpu/";
        
      },
    },{id: "post-ndk를-이용한-독립-실행이-가능한-c-웹-서버-개발",
      
        title: "NDK를 이용한 독립 실행이 가능한 C++ 웹 서버 개발",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/android-native-app/";
        
      },
    },{id: "post-arm의-computelibrary인-armcl-크로스-빌드-및-통합-과정",
      
        title: "Arm의 ComputeLibrary인 ArmCL 크로스 빌드 및 통합 과정",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/setting-build-armcl/";
        
      },
    },{id: "post-원격-데스크톱-노트북-개발-문서편",
      
        title: "원격 데스크톱 노트북 개발- 문서편",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/project/";
        
      },
    },{id: "post-arm64에서-동작하는-openvino-빌드-방법-및-통합-과정",
      
        title: "Arm64에서 동작하는 OpenVINO 빌드 방법 및 통합 과정",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/OpenVINO-for-ARM64/";
        
      },
    },{id: "post-졸업-프로젝트-원격-데스크톱-노트북-개발",
      
        title: "졸업 프로젝트, 원격 데스크톱 노트북 개발",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/graduate-project/";
        
      },
    },{id: "post-intel-simd를-통한-고속-행렬-연산-기초",
      
        title: "Intel SIMD를 통한 고속 행렬 연산(기초)",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/optiomize-Matrix/";
        
      },
    },{id: "post-mes-시스템에-적용한-멀티-페이지-시스템-구현",
      
        title: "MES 시스템에 적용한 멀티 페이지 시스템 구현",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/multi-page/";
        
      },
    },{id: "post-winapi-활용한-mono-gui-잔상-최적화",
      
        title: "WinAPI 활용한 MONO GUI 잔상 최적화",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/dotnet-optimize/";
        
      },
    },{id: "post-밑바닥부터-만드는-컴파일러-in-go란-책을-읽고-나서",
      
        title: "밑바닥부터 만드는 컴파일러 in Go란 책을 읽고 나서",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/compiler/";
        
      },
    },{id: "post-oauth2-0과-jwt를-활용한-회원가입-구현",
      
        title: "OAuth2.0과 JWT를 활용한 회원가입 구현",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/jwt-mobile/";
        
      },
    },{id: "post-한국전자통신연구원-etri-하계-인턴-자소서-및-후기",
      
        title: "한국전자통신연구원(ETRI) 하계 인턴 자소서 및 후기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/etri-intern-review/";
        
      },
    },{id: "post-reflection을-활용한-관리자-페이지-구현",
      
        title: "Reflection을 활용한 관리자 페이지 구현",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/csharp-optimize/";
        
      },
    },{id: "post-객체-지향-프로그래밍과-디자인-패턴-적용-후기",
      
        title: "객체 지향 프로그래밍과, 디자인 패턴 적용 후기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/oriented-object-programming/";
        
      },
    },{id: "post-nuget과-vcpkg를-활용한-c-과-c-패키지-관리",
      
        title: "Nuget과 Vcpkg를 활용한 C++과 C# 패키지 관리",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/dotnet-cpp-packagemanager/";
        
      },
    },{id: "post-opengl하다-엔진-️-만들었나-날-구해줘-팝콘쥬",
      
        title: "😎OpenGL하다 엔진⚙️ 만들었나❓  날 구해줘 팝콘쥬",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/opengl-popcornjoo/";
        
      },
    },{id: "post-학과-서버-수요와-활용방안-보고서",
      
        title: "학과 서버 수요와 활용방안 [보고서]",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/deu-server-architecture/";
        
      },
    },{id: "post-numato의-serial와-gpio-통신-모듈-사용기",
      
        title: "numato의 Serial와 GPIO 통신 모듈 사용기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/concurrency-gpio-for-numato/";
        
      },
    },{id: "post-usb-to-ttl-케이블을-통해-usb-to-usb-케이블-만들기",
      
        title: "Usb To TTL 케이블을 통해 Usb to Usb 케이블 만들기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/serial-rs232-cable/";
        
      },
    },{id: "post-pipe를-이용한-다른-프로그램간-통신",
      
        title: "Pipe를 이용한 다른 프로그램간 통신",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/ipc-console/";
        
      },
    },{id: "post-동의대학교-공지사항-대시보드-구현",
      
        title: "동의대학교 공지사항 대시보드 구현",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/dashboard/";
        
      },
    },{id: "post-쿠버네티스의-서비스-앱-만들기",
      
        title: "쿠버네티스의 서비스 앱 만들기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/k8s-cloud/";
        
      },
    },{id: "post-argo-cd와-github-action을-활용한-gitops-시스템-구축",
      
        title: "Argo CD와 Github Action을 활용한 GitOps 시스템 구축",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/argocd-gitops/";
        
      },
    },{id: "post-nosql-종류인-mongodb를-활용한-개발-후기",
      
        title: "NoSQL 종류인 MongoDB를 활용한 개발 후기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/mongodb/";
        
      },
    },{id: "post-go-언어와-grpc-사용",
      
        title: "Go 언어와 gRPC 사용",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/grpc-go/";
        
      },
    },{id: "post-go-언어-적응기",
      
        title: "Go 언어 적응기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/go-lang/";
        
      },
    },{id: "post-ios-어플리케이션-외주-개발-중-기술-및-내부-정리",
      
        title: "iOS 어플리케이션 외주 개발 중 기술 및 내부 정리",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/lebengrida-outsorcing/";
        
      },
    },{id: "post-내-외부망-통신-서버-구축",
      
        title: "내, 외부망 통신 서버 구축",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/dual-lan/";
        
      },
    },{id: "post-kubernetes에-nfs로-데이터-공유-시스템-구성",
      
        title: "Kubernetes에 NFS로 데이터 공유 시스템 구성",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/k8s-nfs/";
        
      },
    },{id: "post-github-action을-이용한-자동-dockerhub-배포-시스템",
      
        title: "Github Action을 이용한 자동 DockerHub 배포 시스템",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/2021-11-28/";
        
      },
    },{id: "post-erp-시스템에-적용할-jwt-인증-기법",
      
        title: "ERP 시스템에 적용할 JWT 인증 기법",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/jwt-auth/";
        
      },
    },{id: "post-학과-동아리-erp-시스템-구축과-도입",
      
        title: "학과 동아리 ERP 시스템 구축과 도입",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/erp-system/";
        
      },
    },{id: "post-cloudflare의-api-활용하여-서브도메인의-ssl-인증서와-dns-관리",
      
        title: "Cloudflare의 API 활용하여 서브도메인의 SSL 인증서와 DNS 관리",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/cloudflare-ssl-outsourcing/";
        
      },
    },{id: "post-동의대학교-봉사활동-안드로이드-어플-런칭",
      
        title: "동의대학교 봉사활동 안드로이드 어플 런칭",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/android-launch/";
        
      },
    },{id: "post-학과-동아리방-서버-구축-및-설계",
      
        title: "학과 동아리방 서버 구축 및 설계",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/architecture-design/";
        
      },
    },{id: "post-dns-서버의-srv를-활용한-aws-like-서버-구축",
      
        title: "DNS 서버의 SRV를 활용한 AWS-Like 서버 구축",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/make-server-like-aws/";
        
      },
    },{id: "post-오목-게임-개발을-위해서-cmake와-opengl를-활용한-프로젝트-개발",
      
        title: "오목 게임 개발을 위해서 CMake와 OpenGL를 활용한 프로젝트 개발",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/buildsystem-cmake/";
        
      },
    },{id: "post-server-driven-ui-서버가-주도하는-사용자-경험",
      
        title: "Server Driven UI. 서버가 주도하는 사용자 경험",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/Server-Driven-UserInterface/";
        
      },
    },{id: "post-ue4와-unity에-적용된-컴포넌트-패턴-개발-cbd-을-적용-해본-사례",
      
        title: "UE4와 Unity에 적용된 컴포넌트 패턴 개발(CBD)을 적용 해본 사례",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/coding-style/";
        
      },
    },{id: "post-ios-어플-개발-하면서-기존-라이브러리에-대한-문제-해결한-방법",
      
        title: "iOS 어플 개발 하면서 기존 라이브러리에 대한 문제 해결한 방법",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/github-fork/";
        
      },
    },{id: "post-아이폰-어플-개발-하면서-느낀-오픈-소스의-장점-단점과-고마웠던-점",
      
        title: "아이폰 어플 개발 하면서 느낀 오픈 소스의 장점, 단점과 고마웠던 점",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/opensource-think/";
        
      },
    },{id: "post-amazon-web-service에-대해-공부하다-알게-된-cloud-service별-가상화-단계",
      
        title: "Amazon Web Service에 대해 공부하다 알게 된 Cloud Service별 가상화 단계",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/FaaS-study-with-aws/";
        
      },
    },{id: "post-도커에-대한-공부와-k-해커톤-대회-개발-환경-구축",
      
        title: "도커에 대한 공부와 K 해커톤 대회 개발 환경 구축",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/developDocker/";
        
      },
    },{id: "post-minimax-알고리즘-공부-및-내용-점검",
      
        title: "Minimax 알고리즘 공부 및 내용 점검",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/minimaxstudy/";
        
      },
    },{id: "post-cmake-빌드-시스템을-활용한-os-판별-및-그-외",
      
        title: "CMAKE 빌드 시스템을 활용한 OS 판별 및 그 외",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/cmakeosdefine/";
        
      },
    },{id: "post-c-에서-os와-compiler-판별",
      
        title: "C++에서 OS와 Compiler 판별",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/CpredefineMacro/";
        
      },
    },{id: "post-네트워크-통신에-generic을-적용-후기",
      
        title: "네트워크 통신에 Generic을 적용 후기",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/swiftTypeAlias/";
        
      },
    },{id: "post-ide에-있는-scheme-를-이용하여-효율적인-작업-분담-및-개발-내용",
      
        title: "IDE에 있는 Scheme 를 이용하여 효율적인 작업 분담 및 개발 내용",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/use-xcode-scheme/";
        
      },
    },{id: "post-웹-페이지-외주-개발-중-발생-했던-일-정리",
      
        title: "웹 페이지 외주 개발 중 발생 했던 일 정리",
      
      description: "",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/Jquery-Zoom-Resize/";
        
      },
    },{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%63%68%61%63%68%61@%75%64%6F%6E.%70%61%72%74%79", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Piorosen", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HAp5V-kAAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
