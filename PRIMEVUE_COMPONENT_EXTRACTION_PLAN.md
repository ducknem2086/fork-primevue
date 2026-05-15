# OdaComponents Component Extraction Plan

## Muc tieu

Be toan bo source component OdaComponents va cac phan xu ly truc tiep tren component sang `oda-components` de co the tiep tuc tuy bien, build va su dung nhu mot component library rieng.

Pham vi nay khong chi la copy `oda-components/packages/oda-components/src`. Component OdaComponents phu thuoc vao core runtime, icon, package boundary cua forms, theme/style engine va cac package noi bo `@oda-components/styled`, `@oda-components/utils`, `@oda-components/style-tokens`, `@oda-components/theme-tokens`.

## Ket luan ve source goc

Thu muc component chinh:

- `oda-components/packages/oda-components/src`

Thu muc xu ly loi cho component:

- `oda-components/packages/core/src`: config plugin, base component, base directive, style loader, event service.
- `oda-components/packages/icons/src`: icon components duoc component OdaComponents import truc tiep.
- `oda-components/packages/forms/src`: Form, FormField, useForm va resolver adapters hien tai. Khi sang `oda-components`, giu package boundary `@oda-components/forms` nhung rewrite internals.
- `oda-components/packages/themes/src`: preset theme export surface cho styled mode.

Thu muc ho tro build / DX:

- `oda-components/packages/metadata`: metadata cho component/directive/composable.
- `oda-components/packages/auto-import-resolver`: resolver cho auto import.
- `oda-components/packages/nuxt-module`: chi can neu `oda-components` can Nuxt integration.

Khong can be theo neu muc tieu la component library runtime:

- `oda-components/apps/showcase`: docs/demo app.
- `oda-components/apps/volt`: demo/theme wrapper app.
- `oda-components/packages/mcp`: MCP tooling.

## Ranh gioi bat buoc

Neu muon "be het tat ca component va phan xu ly tren component", bo toi thieu can mang theo la:

```text
oda-components/packages/core
oda-components/packages/OdaComponents
oda-components/packages/icons
oda-components/packages/forms    # copy as scaffold, then rewrite internals
oda-components/packages/themes
oda-components/scripts
```

Ly do:

- `oda-components/packages/oda-components/src/*/*.vue` thuong `extends` cac base class tu `@oda-components/core`.
- Nhieu component import icon tu `@oda-components/icons/*`.
- Form-related components/metadata tro den `@oda-components/forms`, nen van can giu package boundary/export contract.
- Style component import token/theme tu `@oda-components/style-tokens` va theme runtime tu `@oda-components/styled`.
- Build scripts cua tung package dung helper chung trong `oda-components/scripts`.

Luu y rieng ve forms:

- Khong copy y nguyen runtime forms cu nhu final implementation.
- Chi giu package boundary va public exports cua `@oda-components/forms`.
- Rewrite implementation ben trong de bo phu thuoc bat buoc vao forms runtime ben ngoai.

## Dependency ben ngoai can giu

Sau khi noi bo hoa theme/style/utils, dependency runtime ben ngoai bat buoc chi con Vue:

```json
{
  "vue": "^3.5.0"
}
```

Cac package theme/style/utils da duoc dua ve workspace noi bo:

- `@oda-components/styled`
- `@oda-components/utils`
- `@oda-components/style-tokens`
- `@oda-components/theme-tokens`

Forms runtime ben ngoai khong con la dependency bat buoc vi `@oda-components/forms` duoc rewrite noi bo.

Dependency theo component dac biet:

- `chart.js`: can cho `Chart`.
- `quill`: can cho `Editor`.
- `oda-icons`: can neu van dung icon class cua PrimeIcons trong consumer app.

Khuyen nghi hien tai: khong dung package UI ben thu ba lam runtime dependency. Neu can giu lai code co nguon goc OSS, phai giu license/attribution phu hop.

## Kien truc dich de xuat

Giu gan voi OdaComponents workspace de tranh sua import lon:

```text
oda-components/
  package.json
  pnpm-workspace.yaml
  scripts/
    build-helper.mjs
  packages/
    core/
    oda-components/
    icons/
    forms/
    themes/
    metadata/              # optional nhung nen giu neu can auto import/doc metadata
    auto-import-resolver/  # optional
  src/                     # app playground hien tai cua oda-components
```

Ten package nen giu nguyen trong giai do dau:

- `@oda-components/core`
- `OdaComponents`
- `@oda-components/icons`
- `@oda-components/forms`
- `@oda-components/themes`

Ly do: source OdaComponents import noi bo bang package name, vi du:

```js
import BaseComponent from '@oda-components/core/basecomponent';
import SpinnerIcon from '@oda-components/icons/spinner';
import Badge from 'oda-components/badge';
```

Neu doi package name ngay, can rewrite hang tram import path va export map. Nen doi ten package chi la phase rieng sau khi build da chay on dinh.

Rieng `@oda-components/forms`, van giu package name trong phase dau vi `metadata`, `nuxt-module`, docs/demo snippets va consumer import dang tro den `@oda-components/forms/form`, `@oda-components/forms/formfield`, `@oda-components/forms/useform`.

## Forms Compatibility Contract

Implementation moi cua forms phai giu cac public entrypoints sau:

- `@oda-components/forms`
- `@oda-components/forms/form`
- `@oda-components/forms/formfield`
- `@oda-components/forms/useform`
- `@oda-components/forms/form/style`
- `@oda-components/forms/formfield/style`

Runtime contract can giu:

- `Form` provide `$pcForm`.
- `FormField` provide/ket noi duoc `$pcFormField`.
- `BaseEditableHolder` van doc duoc `$pcForm.register(name, options)`.
- `BaseEditableHolder` van doc duoc `$pcForm.getFieldState(name)`.
- `BaseEditableHolder` van doc duoc `$pcForm.initialValues` va `$pcForm.fields`.
- `BaseEditableHolder` van doc duoc `$pcFormField.$field`, `$pcFormField.formControl`, `$pcFormField.initialValue`.
- Slot API cua `Form` va `FormField` giu tuong thich voi OdaComponents hien tai o muc co ban.

## Ke hoach thuc hien

### Phase 0: Chot trang thai target

1. Kiem tra `oda-components/packages` hien co.
2. Vi truoc do da tung copy thu `core` va `OdaComponents`, can quyet dinh:
   - Ghi de bang ban copy moi tu `OdaComponents`.
   - Hoac xoa ban copy thu roi copy lai sach.
3. Khong sua source component trong phase nay.

Ket qua mong muon:

- Biet ro `oda-components/packages` dang la ban nhap hay ban chinh thuc.
- Khong co file copy do dang gay nham lan.

### Phase 1: Chuyen `oda-components` sang workspace

1. Tao `oda-components/pnpm-workspace.yaml`.
2. Chuyen dependency catalog tu `oda-components/pnpm-workspace.yaml` sang `oda-components/pnpm-workspace.yaml`.
3. Cap nhat `oda-components/package.json`:
   - Dung `pnpm`.
   - Them scripts build cho tung package.
   - Giu Vite app hien tai lam playground neu can.
4. Quyet dinh co xoa `package-lock.json` va chuyen sang `pnpm-lock.yaml` hay khong.

Khuyen nghi:

- Dung `pnpm`, vi OdaComponents workspace goc dang dung `workspace:*` va `catalog:`.
- Neu van dung npm, phai rewrite dependency workspace/catalog trong tat ca package, rui ro cao hon.

### Phase 2: Copy package runtime bat buoc

Copy nguyen cac thu muc:

```text
oda-components/packages/core      -> oda-components/packages/core
oda-components/packages/OdaComponents  -> oda-components/packages/OdaComponents
oda-components/packages/icons     -> oda-components/packages/icons
oda-components/packages/forms     -> oda-components/packages/forms    # scaffold only, rewrite internals
oda-components/packages/themes    -> oda-components/packages/themes
oda-components/scripts            -> oda-components/scripts
```

Khong copy:

```text
oda-components/apps
oda-components/packages/mcp
oda-components/.github
oda-components/.claude
oda-components/.codex
```

### Phase 3: Copy package ho tro neu can full DX

Nen copy them neu muon gan ngang OdaComponents goc:

```text
oda-components/packages/metadata
oda-components/packages/auto-import-resolver
```

Chi copy `oda-components/packages/nuxt-module` neu `oda-components` can Nuxt module rieng.

### Phase 4: Cap nhat root build scripts

Trong `oda-components/package.json`, them cac scripts toi thieu:

```json
{
  "scripts": {
    "build:core": "pnpm --filter core build",
    "build:icons": "pnpm --filter icons build",
    "build:forms": "pnpm --filter forms build",
    "build:themes": "pnpm --filter themes build",
    "build:lib": "pnpm --filter ./packages/components build",
    "build:packages": "pnpm run build:core && pnpm run build:icons && pnpm run build:forms && pnpm run build:themes && pnpm run build:lib",
    "build": "pnpm run build:packages"
  }
}
```

Neu copy `metadata` va `auto-import-resolver`, build order nen la:

```text
metadata -> auto-import-resolver -> core -> icons -> forms -> themes -> OdaComponents
```

### Phase 5: Cai dependencies

Them dependencies/devDependencies tu root OdaComponents:

Runtime/catalog:

```text
@oda-components/styled
@oda-components/utils
@oda-components/style-tokens
@oda-components/theme-tokens
vue
```

Forms runtime ben ngoai khong nam trong runtime dependency bat buoc. Chi them tam thoi neu can migration ngan han, sau do phai bo.

Build/dev:

```text
@rollup/plugin-alias
@rollup/plugin-babel
@rollup/plugin-node-resolve
@rollup/plugin-terser
rollup-plugin-postcss
rollup-plugin-vue
typescript
fs-extra
```

Component optional:

```text
chart.js
quill
oda-icons
```

### Phase 6: Rewrite forms package

Giu `oda-components/packages/forms` nhu package rieng, nhung rewrite internals thay vi phu thuoc vao forms runtime ben ngoai.

Can giu:

- `package.json` name la `@oda-components/forms`.
- Public exports cho `form`, `formfield`, `useform`, `form/style`, `formfield/style`.
- `Form`, `FormField`, `useForm` va style files build duoc nhu package con.
- Contract runtime voi `BaseEditableHolder` nhu muc `Forms Compatibility Contract`.

Can thay doi:

- Remove re-export resolver adapters tu forms runtime ben ngoai.
- Implement local `useForm`.
- Cho phep resolver la custom function do consumer truyen vao.
- Neu can resolver adapters nhu zod/yup/valibot, implement noi bo trong `@oda-components/forms` hoac tach thanh phase rieng.

### Phase 7: Kiem tra import path

Chay cac lenh scan:

```bash
rg "@oda-components/" oda-components/packages
rg "from 'oda-components/" oda-components/packages
rg "@oda-components/(styled|utils|style-tokens|theme-tokens)" oda-components/packages
```

Muc tieu:

- Import `@oda-components/core`, `@oda-components/icons`, `@oda-components/forms` resolve qua workspace.
- Import `oda-components/*` resolve ve `oda-components/packages/OdaComponents`.
- Import theme/style/utils resolve qua package noi bo `@oda-components/*`.
- Khong con dependency bat buoc vao forms runtime ben ngoai.

Khong rewrite import truoc khi build fail co bang chung cu the.

### Phase 8: Build tung package

Build theo thu tu:

```bash
pnpm --filter core build
pnpm --filter icons build
pnpm --filter forms build
pnpm --filter themes build
pnpm --filter ./packages/components build
```

Neu loi xay ra:

- Loi missing theme/style/utils: kiem tra package noi bo `@oda-components/*` va workspace link.
- Loi missing `scripts/build-helper.mjs`: kiem tra da copy `oda-components/scripts`.
- Loi `workspace:*`/`catalog:`: kiem tra `pnpm-workspace.yaml`.
- Loi `Chart`/`Editor`: them `chart.js`/`quill` hoac tam thoi exclude neu chua can.
- Loi forms: kiem tra implementation moi co giu public exports va runtime contract khong.

### Phase 9: Tao playground test trong Vite app

Dung `oda-components/src` hien co lam playground.

Test toi thieu:

1. Cai OdaComponents plugin tu local workspace.
2. Render `Button`.
3. Render mot overlay component nhu `Dialog`.
4. Render mot input component nhu `InputText`.
5. Render mot data component nho nhu `DataTable`.
6. Kiem tra style theme co load.
7. Render `InputText name="username"` trong `Form`.
8. Render `FormField` boc `Password` hoac `InputText`.
9. Test submit valid/invalid va reset form.
10. Kiem tra component doc `$invalid` tu `BaseEditableHolder`.

Vi du test import:

```js
import OdaComponents from 'oda-components/config';
import Button from 'oda-components/button';
```

### Phase 10: Quyet dinh doi brand/package name

Chi lam sau khi build va playground da chay.

Lua chon A: giu package name OdaComponents noi bo.

- It sua code.
- De update tu upstream hon.
- Ten public van la OdaComponents.

Lua chon B: doi thanh ODA packages.

- Vi du `@oda-components/core`, `@oda-components/vue`.
- Can rewrite import path, package exports, metadata, resolver, docs.
- Rui ro cao, nen tach thanh phase rieng.

## Checklist verify

- `pnpm install` thanh cong trong `oda-components`.
- `pnpm run build:packages` thanh cong.
- `oda-components/button`, `oda-components/dialog`, `oda-components/inputtext` import duoc.
- `@oda-components/core/config` import duoc.
- `@oda-components/icons/spinner` import duoc.
- Theme styled mode chay duoc.
- `unstyled: true` chay duoc.
- Component overlay khong loi z-index/portal.
- Form component chay duoc voi implementation rewrite.
- `Form`, `FormField`, `useForm` giu public import path hien tai.
- Scan import xac nhan khong con dependency bat buoc vao forms runtime ben ngoai.
- Chart/Editor duoc quyet dinh ro: support day du hay exclude tam thoi.

## Rui ro chinh

- OdaComponents phu thuoc manh vao theme/style/utils engine; copy source component khong dong nghia da co toan bo engine.
- Import path noi bo dung package names, nen doi ten package qua som se gay loi hang loat.
- `oda-components` hien dang dung npm lockfile, trong khi OdaComponents dung pnpm workspace/catalog.
- Mot so component co dependency optional nhu `Chart` va `Editor`.
- Build scripts cua package phu thuoc `oda-components/scripts/build-helper.mjs`.
- Forms rewrite co the lam vo component editable neu khong giu contract `$pcForm`/`$pcFormField`.

## De xuat thuc hien thuc te

Di theo 3 moc:

1. Moc 1: Copy va build duoc `core + icons + OdaComponents`.
2. Moc 2: Them `themes`, rewrite `forms`, render test trong Vite playground.
3. Moc 3: Them `metadata + auto-import-resolver`, sau do moi tinh den doi ten package/brand.

Khong nen rewrite source component ngay tu dau. Hay giu nguyen OdaComponents package boundaries, build chay truoc, roi moi tuy bien.
