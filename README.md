# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).






// cách login lại vào aws để lấy token mới 
// dùng cho việc publish / install:

note : cần cài aws cli trước khi thực hiện 

BUOC 1: login vào aws với link sau :

https://704970334544.signin.aws.amazon.com/console


Buoc 2: sau khi login được thì thoát ra và dùng lệnh này với powershell / terminal (có hỗ trợ aws cli)

aws codeartifact login --tool npm --repository oda-components --domain mfe-portfollio --domain-owner 704970334544 --region ap-southeast-1

Rồi chọn account cần đấu vào registry

Buoc 3: sau khi đấu vào registry thành công thì dùng lệnh này để lấy token aws (chỗ này nó sẽ list ra các token npm hiện có với từng registry), và chỉ dùng cho powershell

Get-Content $HOME\.npmrc


B4: sau khi có token thì điền lại file .npmrc 


registry=https://mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/:always-auth=true
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/:_authToken=${CODEARTIFACT_AUTH_TOKEN}

Với auth token là token bạn vừa lấy được 

B5: npm i @app/oda-component@latest

## Public: cũng làm giống với phần install chỉ khác ở bước 5:

B5 : npm run build:clean -> npm publish

