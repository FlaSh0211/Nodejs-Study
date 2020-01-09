# nodejs

# npm
* npm은 Node.js로 만들어진 모듈을 웹에서 받아서 설치하고 관리해주는 프로그램이다 (pip, apt 와 비슷한 역할)
* 가장 널리 사용되어 개발자들 사이에서 표준 프레임워크로 사용되고 있다
# yarn
* npm과 같은 프로그램이고 npm이후에 나온 프로그램이다. 속도가 npm 보다 빠르다는 장점이 있다

# mvc patterns

## pug
* html 파일과 같은 역할 
* node js 에서는 pug 형식을 사용 

## model
* dir:

## static
* 정적파일 보관 (css media)

## views
* 사용자에게 보여지는 부분 
* dir : views
* view engine: pug  (퍼그 형태 파일 사용)

## urls
* `app.use("/", func`)
* default 경로는 "/" 이다
* app.get("/", (req, res) => res.render("home"));
    * home.pug로 라우팅 

## controller

### express
* Express.js는 Node.js의 핵심 모듈인 http와 Connect 컴포넌트를 기반으로 하는 웹 프레임워크다. 그러한 컴포넌트를 미들웨어(middleware)라고 하며,
    * 컴포넌트(Component)란 프로그래밍에 있어 재사용이 가능한 각각의 독립된 모듈을 뜻한다. 
* 기본적인 것은 자동으로 만들어주기도 하고 직접 만들어야하는 부분도 있다
* 개발자가 필요한것만 골라서 만들어 node js와 결합해서 사용 가능

* app.set
    * server setting
        * app.set("view engine", "pug");
            * view engine을 pug 로 사용하겠다 
        * app.set("views", join(__dirname, "views"));
            * views에 사용될 html(여기선 pug)파일을 views 라고 하는데 views의 dirname을 views로 한다(폴더 이름이 views)
* app.use
    * middleware 연결 기능
        * 여기서는 정적파일을 모아두는 디렉토리를 연결한다
* app.get
    * router (라우팅)
        * 렌더링 할 페이지 연결
