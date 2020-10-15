<img src="https://github.com/kjunha/optimus-boilerplate/blob/master/resource/optimus.jpg?raw=true" width="100%"></img>

# <p align="center">Optimus Boilerplate</p>

<p>
본 저장소에는 모든 웹 풀스텍 개발을 위한 on the fly 개발환경이 구축되어 있습니다. 프론트엔드, 백엔드, 데이터베이스 시스템 아키텍쳐를 구성하는 것은 초보 개발자가 Full Stack Web Appplication 프로젝트를 진행하는데 있어 높은 진입장벽인 경우가 많습니다. Optimus Boilerplate 는 Express 백엔드 API 서버, Vue.js 프론트엔드 서버 및 mysql 서버가 독립적인 도커 컨테이너로 구성되어 있으며, Composer를 통해 간단하게 실행할 수 있습니다. Optimus Boilerplate 부터 시작하면, 여러분은 바로 코딩을 시작할 수 있습니다!
</p>
<br/>

### <p align="center" style="text-decoration:underline">About Developer</p>

**<p align="center" style="font-size:16pt">김준하</p>**
<p align="center">:mailbox: kjunha77@gmail.com </p>
<p align="center">
Developer, Surfer, Photographer<br/>
Brigham Young University - Hawaii<br/>
Software Engineer @ WAY2BIT<br/>
</p>

## :hammer_and_wrench: System Requirement
> + Git (latest) [[download](https://git-scm.com/)]
> + Docker (latest) [[download](https://www.docker.com/products/docker-desktop)]
> + Node.js & npm (latest) [[download](https://nodejs.org)]
> + Mysql CLI (latest) [[download](https://dev.mysql.com/downloads/shell/)]

:bulb: &nbsp; Mac OS 사용자들은 :beer: <a href="https://brew.sh">HomeBrew</a> 를 이용하여 필요한 구성요소를 다운받을 수 있습니다.<br/>

## :seedling: Get Started

1. 본 저장소를 로컬환경으로 clone 합니다.
2. clone 받은 저장소로 이동하여 `docker-compose up` 명령을 실행합니다.
3. 브라우저에서 [http://localhost](http://localhost)로 접속합니다. (80, 3000, 3307번 포트를 사용합니다.)
4. 데이터베이스에 접속하기 위해서 MySQL CLI 명령어 혹은 데이터베이스 관리 시스템을 사용하여 접근할 수 있습니다.

```console
$ git clone https://github.com/kjunha/optimus-boilerplate.git

$ cd optimus-boilerplate

$ docker-compose up

$ mysql -u root -p --host 127.0.0.1 --port 3307
Enter password: mypass
```
:bulb: &nbsp; `docker-compose up -d` 옵션을 사용하여 docker-compose 를 데몬에서 실행할 수 있습니다.<br/>
:bulb: &nbsp; mysql db 컨테이너가 종료되더라도, 데이터는 그대로 유지됩니다. 걱정마세요!<br/>

## :roller_coaster: Heads Up!
* MongoDB NoSQL DB 컨테이너
* GoEthereum Blockchain Node 컨테이너
* 각 컨테이너별 Hands On Guideline
* Environment Variable Manager
* Optimus Boilerplate CLI Quick Starter
* Official Website