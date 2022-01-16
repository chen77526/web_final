# NTU_JOBS

簡易上手投影片：https://docs.google.com/presentation/d/1FNmda_KHs0ZzsAk-E11VGMM8anaAGlnIvSNu75aCmwo/edit?usp=sharing


## localhost 安裝與執行

### Install packages

```
cd web_final/frontend
yarn install
```
```
cd web_final/backend
yarn install
```
### 若以上無法成功執行
```
yarn add ant-design @mui/material bcrypt nodemailer
```
### Create .env file in backend

```
MONGO_URL= {your monogo url}
MAIL_USER= {your gsuite account}
MAIL_PASS= {your gsuite password}
```

## .env-default使用方式
裡面有四個參數
MONGODB的URL與一個Gmail帳號與一個Gmail密碼，並且要使用寄信功能，需要進入 https://support.google.com/accounts/answer/6010255?hl=en 點擊 ( If "Less secure app access" is on for your account ) 並允許 Less Secure App Access。

## To start

### program structure
```

├── backend 
│   ├── src
│   │   ├── email                             負責寄送verification的信件
│   │   │   ├── EmailTemplate.js              信件樣式的template
│   │   │   ├──  SendMail.js                  寄出信件
│   │   │   ├──  index.js                     export檔
│   │   ├── models
│   │   │   ├──  db.js                        定義在DB的models
│   │   ├── resolvers                         
│   │   │   ├──  Date.js                      處理POST裡面duedate
│   │   │   ├──  Mutation.js
│   │   │   ├──  Query.js
│   │   │   ├──  Subscriptions.js
│   │   │   ├──  utility.js
│   │   ├── index.js
│   │   ├── mongo.js                          連接mongodb
│   │   ├── schema.graphql                    定義schema裡面有甚麼
│   │   ├── server.js                         連接server
│   │   ├── setupTest.js
│   ├── .babelrc
│   ├── .env.defaults                         裡面包含寄信的信箱帳號密碼、port、MONGOURL
│   ├── package.json
│   ├── yarn.lock
├── frontend
│   ├──public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── src
│   │   ├── Components
│   │   │   ├── Data
│   │   │   │   ├── HomeData.js                寫HOME的頁面data
│   │   │   ├── Footer_ele.js                  footer elements
│   │   │   ├── Format_ele.js                  format elements
│   │   │   ├── Info_ele.js                    info格式的elements
│   │   │   ├── NavBar_ele.js                  上面的Navbar的elements
│   │   │   ├── post_ele.js                    post的elements
│   │   │   ├── posts_ele.js                   給allposts頁面的elements
│   │   ├── Containers
│   │   │   ├── Confirm.js                     點信箱的確認信連結到按確認信的頁面
│   │   │   ├── CreatePost.js                  點+號之後進入的頁面
│   │   │   ├── Footer.js                      所有頁面下方那一塊
│   │   │   ├── Home.js                        點NTU_JOBS的首頁
│   │   │   ├── Info.js                        把info elements串接起來
│   │   │   ├── Login.js                       處理登入認證與儲存loaclStorage
│   │   │   ├── NavBar.js                      上面的bar
│   │   │   ├── PersonalPage.js                點擊Navbar後進入個人頁面
│   │   │   ├── Post.js                        處理單一post的畫面
│   │   │   ├── QueryPosts.js                  處理allposts所有post呈現出來的畫面
│   │   │   ├── Resume.js                      處理寫CV的頁面
│   │   │   ├── SignUp.js                      加入會員，點擊通過email確認後會寄出認證信
│   │   │   ├── Verify.js                      寄出信件後（sign up之後的頁面）會要求你先點擊信件以認證
│   │   │   ├── Viewapp.js                     觀看自己提出的post有申請applicant的個人資料與CV
│   │   ├── Hooks
│   │   │   ├── useLogin.js                    //登入帳密用
│   │   │   ├── useToken.js                    //處理localstorage的token
│   │   ├── graphQL
│   │   │   ├── Mutation.js
│   │   │   ├── Query.js
│   │   │   ├── Subscription.js
│   │   │   ├── index.js
│   │   ├── images
│   │   │   ├── Certificate.svg
│   │   │   ├── DigitalNomad.svg
│   │   │   ├── HappyNews.svg
│   │   │   ├── Programming.svg
│   │   ├── App.js                            //所有route接的地方
│   │   ├── App.test.js
│   │   ├── globalStyles.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js

```


### Run the program

#### in one terminal

```
cd web_final
yarn server
```

#### in another terminal

```
cd web_final
yarn start
```

## 題目說明

本次project建構了一個專屬台大人的求職網站，主要功能為建立不同需求的工作機會給使用者瀏覽，使用者可以透過申請帳號以及填寫履歷獲得建立及查詢post的權利，並且能使用filter查詢不同類型的工作。
Sign Up時只有gsuite可以sign up，並且要去信箱收確認信已完成登入動作。
當順利Login之後，會直接進入show出所有posts的頁面，此時tab在ALL，此處的所有posts limitation都設為0，代表給所有人看到；如果切換到 Limited的 tag，就可以看到只限制自己系所的能看到的posts，至於時間顯示onging的tab會show出剩餘時間一天以內的posts(顯示問題 in a day其實還有一天以上所以不會顯示在內)，至於CLOSED會顯示已經超過時間的posts。
按加號可以 create一個新的post，下面的Limitation就是可以拿來輸入系所代碼（三位數）以限制能看到的人，目前只能輸入一個三位數，輸入0擊表示所有人都能看到post。
點擊YOU即可觀看個人檔案。個人檔案分為四個tabs：My_CV會顯示個人資料（在verify email後會跳到填入頁面），包含USERINFO和個人CV；owned會存自己post出去的post，點擊可以進入觀看按下apply的應徵者的個人資料與CV(如果是空的會跳到只有Navbar和Footer的樣子)；Applied和Interested則是會顯示出自己Apply過的Post Title和自己曾經點過Interested的POST Title，這兩項會在user進入個別post頁面時在下方可以點擊的按鈕，點擊即可送出，重複按愛心符號（Interested）的話會取消Interested。

### Special Tasks：
使用LocalStorage儲存登入網站所需資料，只要不按Logout就可以一直維持登入狀態。
在登入之前如果想要強行進入受限的網站頁面會被跳轉到Login頁面。
使用NodeMailer自動控制google email寄信。










## 目前未修正BUG:
frontend create post 生出除了all以外的post直接回到頁面時會沒有出現，要F5之後再點即屬於他的table才會出現，因為還沒做subscription，只有query。

## ALERT
創建帳號SignUp後一定要去 email點信件，才會有後續的resume與CV的生成，才會完整的創建一個帳號，避免後續query資料時造成query不到而有可能出現錯誤。
LocalStorage是很強力的儲存方式，因此要洗掉內容的話一定要自己手動按 Logout，不然下次重新創建帳號登入後會有問題。
如果不填入gamil信箱會signup時會因為無法寄出信件引起錯誤。
google寄信到 ntumail似乎會有收不到信的情形，因此最後改成是使用gsuite登入。
