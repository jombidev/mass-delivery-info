# mass-delivery-info
대량 송장정보 조회기

# 지원되는 택배사
CJ대한통운, 우체국택배, 한진택배, 롯데택배, 로젠택배, 홈픽, CVSnet 편의점택배(GS25), CU 편의점택배, 경동택배, 대신택배, 일양로지스, 합동택배, 건영택배, 천일
택배, 한덱스, 한의사랑택배, EMS, TNT Express, UPS, Fedex, USPS, i-Parcel, DHL Global Mail, LX판토스, GSMNtoN, ECMS Express, KGL네트웍스, 굿투럭, 우리택배(구
호남택배), GSI Express, SLX택배, 우리한방택배, 세방, Cway Express, YJS글로벌(영국), 성원글로벌카고, 홈이노베이션로지스, 은하쉬핑, Giant Network Group, FLF퍼
레버택배, 농협택배, YJS글로벌(월드), 디디로지스, 대림통운, LOTOS CORPORATION, 애니트랙, 성훈물류, IK물류, 제니엘시스템, 스마트로지스, 이투마스(ETOMARS), 풀 
앳홈, 프레시솔루션, 큐런택배, 두발히어로, 하이브시티, 오늘의픽업, 팬스타국제특송(PIEX), 지니고 당일배송, 로지스밸리, 롯데국제특송, 나은물류, 한샘서비스원 택
배, 배송하기좋은날 (SHIPNERGY), NDEX KOREA, 도도플렉스(dodoflex), 브릿지로지스㈜, 허브넷로지스틱스, MEXGLOBAL, A.C.E EXPRESS INC, 썬더히어로, 1004홈, ㈜캐나
다쉬핑, 부릉, YUNDA EXPRESS, 발렉스 특수물류, 파테크해운항공, 핑퐁, 바바바(bababa), BAIMA EXPRESS, 엔티엘피스, LTL, GTS 로지스, ㈜올타코리아, 판월드로지스틱
㈜, 큐익스프레스, UFO로지스, 딜리래빗, 지오피, 에이치케이홀딩스, HTNS, DHL, 라스트마일, 인터로지스, 탱고앤고, 직구문, 투데이, 큐브플로우(CUBEFLOW), 현대글로
비스, 국제로지스틱(KSE), 에스더쉬핑, ARGO, 골드스넵스, GNG(자이언트), (주)엠티인터내셔널

# 사용법
results 폴더 생성

deliveries.txt안에  다음과 같은 형식으로 
![다음과 같이](https://media.discordapp.net/attachments/875035823442128896/1034185202290925620/unknown.png)
작성후 cmd에 node .

results 폴더에 결과 출력.

# 출력 예제
``
Deliveried? : Y, Now : 완료
┌─────────────────────────┬─────────────────────────┬─────────────────────────┬───────────────┐
│ 배송시간                │ 현재위치                │ 배송상태                │ 상태          │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-19 11:03        │ 파주에스프로            │ 집화처리                │ 인수          │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-20 01:47        │ 파주AMP                 │ SM입고                  │ 인수          │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-20 16:57        │ 파주A                   │ 간선상차                │ 이동중        │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-21 06:02        │ 곤지암Hub               │ 간선하차                │ 이동중        │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-21 07:18        │ 곤지암Hub               │ 간선상차                │ 이동중        │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-21 09:56        │ 포천                    │ 간선하차                │ 이동중        │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-21 11:16        │ 경기포천신내촌          │ 배달출발                │ 배달중        │
│                         │                         │ (배달예정시간           │               │
│                         │                         │ :12∼14시)               │               │
├─────────────────────────┼─────────────────────────┼─────────────────────────┼───────────────┤
│ 2022-10-21 12:29        │ 경기포천신내촌          │ 배달완료                │ 완료          │
└─────────────────────────┴─────────────────────────┴─────────────────────────┴───────────────┘
``

# Powered by Naver
