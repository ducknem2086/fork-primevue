# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).




FOR /F "tokens=*" %g IN ('aws codeartifact get-authorization-token --domain mfe-portfollio --domain-owner 704970334544 --region ap-southeast-1 --query authorizationToken --output text') do (SET CODEARTIFACT_AUTH_TOKEN=%g)


registry=https://mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/:always-auth=true
//mfe-portfollio-704970334544.d.codeartifact.ap-southeast-1.amazonaws.com/npm/oda-components/:_authToken=${CODEARTIFACT_AUTH_TOKEN}

