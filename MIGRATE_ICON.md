# Migrate Icon Package

Ngay lap tai lieu: 2026-05-16

Tai lieu nay thong ke phan phu thuoc hien tai vao package `icons` cua `oda-components` va de xuat huong migrate sang bo icon tu `vue-iconsax/src/components/icons`.

## Muc tieu

- Loai bo dan implementation SVG icon cu trong `src/packages/icons`.
- Dung icon moi tu `../vue-iconsax/src/components/icons`.
- Giu build cua `@app/oda-component` on dinh trong qua trinh migrate.
- Giam rui ro vo contract import hien tai nhu `@app/oda-component/icons/chevrondown`.

## Ket luan nhanh

Khong nen xoa thang `src/packages/icons` trong buoc dau.

Package icon hien tai khong chi chua SVG. No con la public import contract cua component library va co `BaseIcon` de giu class, spin, aria, label. Neu thay truc tiep bang component cua `vue-iconsax`, nhieu component co the van render nhung se lech behavior ve loading, accessibility va passthrough class.

Huong an toan hon:

1. Giu public contract `@app/oda-component/icons/*`.
2. Doi implementation ben trong package `icons` thanh wrapper/alias sang `vue-iconsax`.
3. Sau khi build va visual check on dinh, moi tinh den viec xoa SVG cu.

## Hien trang package icon cu

Thu muc hien tai:

```text
oda-components/src/packages/icons
```

Thong ke:

| Hang muc | So luong |
| --- | ---: |
| Vue icon component trong package cu | 48 |
| Icon export dang duoc consumer noi bo dung | 47 |
| Icon export chua thay consumer | 1 |
| File Vue ngoai package `icons` import icon | 64 |
| File non-Vue/build import hoac re-export icon | 5 |
| Luot import/re-export icon ngoai package `icons` | 172 |
| Unique subpath import tu `@app/oda-component/icons/*` | 48 |

Icon chua thay dung:

```text
thlarge
```

## Hien trang vue-iconsax

Thu muc nguon moi:

```text
vue-iconsax/src/components/icons
```

Thong ke:

| Hang muc | So luong |
| --- | ---: |
| Vue icon component trong `vue-iconsax` | 993 |
| Icon trung ten truc tiep voi bo ODA, sau khi normalize ten | 12 |
| Icon can alias hoac review visual | 36 |

12 icon co the map thang theo ten:

| ODA icon | vue-iconsax |
| --- | --- |
| `arrowdown` | `ArrowDown` |
| `arrowup` | `ArrowUp` |
| `calendar` | `Calendar` |
| `check` | `Check` |
| `eye` | `Eye` |
| `eyeslash` | `EyeSlash` |
| `filter` | `Filter` |
| `infocircle` | `InfoCircle` |
| `minus` | `Minus` |
| `refresh` | `Refresh` |
| `star` | `Star` |
| `trash` | `Trash` |

## Noi dang dung icon nhieu

Component co nhieu import icon nhat:

| File | So icon import |
| --- | ---: |
| `src/packages/components/src/picklist/PickList.vue` | 8 |
| `src/packages/components/src/select/Select.vue` | 6 |
| `src/packages/components/src/datatable/BodyCell.vue` | 6 |
| `src/packages/components/src/image/Image.vue` | 6 |
| `src/packages/components/src/datepicker/DatePicker.vue` | 6 |

Icon duoc dung nhieu nhat:

| Icon | So luot |
| --- | ---: |
| `chevrondown` | 17 |
| `times` | 17 |
| `chevronright` | 14 |
| `spinner` | 11 |
| `check` | 11 |
| `angleright` | 8 |
| `chevronup` | 7 |
| `chevronleft` | 6 |
| `angledown` | 5 |
| `plus` | 5 |
| `minus` | 5 |
| `search` | 4 |

## File non-component bi anh huong

Neu xoa hoac doi package `icons`, can cap nhat cac file build/re-export sau:

| File | Ly do |
| --- | --- |
| `scripts/build-root-types.mjs` | Copy/rewrite type va export `BaseIcon` |
| `src/packages/components/rollup.config.mjs` | Alias `@oda-components/icons/baseicon` |
| `src/packages/components/scripts/prebuild.mjs` | Re-export `BaseIcon` |
| `src/packages/components/src/umd/OdaComponents.js` | Re-export `BaseIcon` |
| `src/packages/components/src/umd/primevue.js` | Re-export `BaseIcon` |
| `src/packages/components/vite.config.ts` | Resolver cho `@oda-components/icons/*` khi bundle unified |
| `src/packages/components/tsconfig.json` | Path alias `@oda-components/icons/*` |
| `vite.config.js` | Workspace package root va alias |
| `package.json` | Script `build:icons` |
| `scripts/bundle-root-dist.mjs` | Bundle output package `icons` |

## Contract can giu

Icon cu dang extend `BaseIcon`, vi du `CheckIcon`:

```vue
<script>
import BaseIcon from '@app/oda-component/icons/baseicon';

export default {
    name: 'CheckIcon',
    extends: BaseIcon
};
</script>
```

`BaseIcon` dang giu cac behavior:

| Behavior | Chi tiet |
| --- | --- |
| Class mac dinh | `p-icon` |
| Loading spin | `p-icon-spin` khi prop `spin = true` |
| Accessibility | `role`, `aria-label`, `aria-hidden` theo prop `label` |
| Passthrough | icon nhan `v-bind="pti()"` |
| Style system | `BaseIconStyle` |

`vue-iconsax` co API khac:

| Prop | Y nghia |
| --- | --- |
| `type` | `linear`, `bold`, `broken`, `bulk`, `outline`, `twotone` |
| `size` | kich thuoc SVG |
| `color` | mau stroke/fill |
| `strokeWidth` | do day stroke |

Vi vay wrapper nen translate contract cu sang API moi, thay vi import truc tiep icon `vue-iconsax` vao 64 component.

## Mapping de xuat

Day la mapping de xuat ban dau. Can visual QA truoc khi merge chinh thuc.

| ODA icon | vue-iconsax de xuat | Muc do |
| --- | --- | --- |
| `angledoubledown` | `ArrowDown2` hoac custom wrapper | Can review |
| `angledoubleleft` | `ArrowLeft2` hoac custom wrapper | Can review |
| `angledoubleright` | `ArrowRight2` hoac custom wrapper | Can review |
| `angledoubleup` | `ArrowUp2` hoac custom wrapper | Can review |
| `angledown` | `ArrowDown2` | Tot |
| `angleleft` | `ArrowLeft2` | Tot |
| `angleright` | `ArrowRight2` | Tot |
| `angleup` | `ArrowUp2` | Tot |
| `arrowdown` | `ArrowDown` | Map thang |
| `arrowup` | `ArrowUp` | Map thang |
| `ban` | `Forbidden` hoac `Forbidden2` | Can review |
| `bars` | `HambergerMenu` hoac `Menu` | Tot |
| `baseicon` | Giu wrapper noi bo | Bat buoc |
| `blank` | Giu custom blank component | Bat buoc |
| `calendar` | `Calendar` | Map thang |
| `check` | `Check` | Map thang |
| `chevrondown` | `ArrowDown2` hoac `ArrowDown3` | Can review |
| `chevronleft` | `ArrowLeft2` hoac `ArrowLeft3` | Can review |
| `chevronright` | `ArrowRight2` hoac `ArrowRight3` | Can review |
| `chevronup` | `ArrowUp2` hoac `ArrowUp3` | Can review |
| `exclamationtriangle` | `Warning2` | Tot |
| `eye` | `Eye` | Map thang |
| `eyeslash` | `EyeSlash` | Map thang |
| `filter` | `Filter` | Map thang |
| `filterfill` | `Filter` voi `type="bold"` | Can review |
| `filterslash` | `FilterRemove` | Tot |
| `infocircle` | `InfoCircle` | Map thang |
| `minus` | `Minus` | Map thang |
| `pencil` | `Edit` | Tot |
| `plus` | `Add` | Tot |
| `refresh` | `Refresh` | Map thang |
| `search` | `SearchNormal` | Tot |
| `searchminus` | `SearchZoomOut` | Tot |
| `searchplus` | `SearchZoomIn` | Tot |
| `sortalt` | `Sort` | Can review |
| `sortamountdown` | `ArrowDown` hoac custom sort icon | Can review |
| `sortamountupalt` | `ArrowUp` hoac custom sort icon | Can review |
| `spinner` | Giu custom spinner hoac wrapper rieng | Bat buoc |
| `star` | `Star` | Map thang |
| `starfill` | `Star` voi `type="bold"` | Can review |
| `thlarge` | Co the bo | Chua thay dung |
| `times` | `CloseSquare` hoac custom close icon | Can review |
| `timescircle` | `CloseCircle` | Tot |
| `trash` | `Trash` | Map thang |
| `undo` | `ArrowRotateLeft` | Tot |
| `upload` | `DocumentUpload` | Tot |
| `windowmaximize` | `Maximize` hoac `LayoutMaximize` | Can review |
| `windowminimize` | `MinusSquare` hoac custom wrapper | Can review |

## Plan migrate

### Phase 1: tao compatibility layer

- Giu nguyen package `src/packages/icons`.
- Tao wrapper/helper noi bo de render icon `vue-iconsax` nhung van expose API cu.
- Giu cac import cu nhu `@app/oda-component/icons/check`.
- Giu `BaseIcon` va `BaseIconStyle` trong phase nay.
- Doi tung icon implementation tu SVG cu sang wrapper dung icon `vue-iconsax`.
- Rieng `spinner`, `blank`, `baseicon` nen giu implementation rieng.

Ket qua mong muon:

- Khong can sua 64 component dang import icon.
- Consumer app van import duoc `@app/oda-component/icons/*`.
- Build package va app demo van pass.

### Phase 2: visual QA va dieu chinh mapping

Can test nhom component co nhieu icon va nhom co icon state:

- `PickList`
- `Select`
- `DatePicker`
- `Image`
- `DataTable`
- `Tree`
- `TreeTable`
- `Dialog`
- `Rating`
- `Toast`
- `Button`
- `VirtualScroller`

Checklist:

- Icon dung huong mui ten.
- Icon loading co spin.
- Close icon co click area va class nhu cu.
- Filter/sort icon phan biet duoc state active/inactive.
- Rating star on/off dung visual.
- `aria-hidden` va `aria-label` khong bi mat.

### Phase 3: cap nhat build plumbing

Sau khi compatibility layer on dinh:

- Cap nhat resolver build neu package icon khong con source layout cu.
- Cap nhat type build de copy dung `.d.ts`.
- Cap nhat UMD/unified re-export neu `BaseIcon` doi vi tri.
- Kiem tra `bundle-root-dist.mjs` de dam bao dist van co `icons`.

### Phase 4: xoa SVG cu

Chi xoa SVG cu sau khi:

- Tat ca wrapper da map sang `vue-iconsax` hoac custom fallback.
- Build root pass.
- `npm pack --dry-run` pass.
- Consumer demo install/build pass.
- Visual QA cac component chinh pass.

## Lenh verify de xuat

Chay trong `oda-components`:

```powershell
npm run build
npm pack --dry-run
```

Neu dang test voi app demo:

```powershell
cd ..\app-demo1
npm install ..\oda-components
npm run build
```

Neu publish len CodeArtifact:

```powershell
cd ..\oda-components
npm version patch --no-git-tag-version
npm run build
npm publish
```

## Rui ro

| Rui ro | Tac dong | Cach giam |
| --- | --- | --- |
| Ten icon khong trung | Import cu bi vo | Giu compatibility layer |
| API icon khac nhau | Mat `spin`, `label`, `aria` | Wrapper translate prop |
| Visual icon khac nhieu | UI thay doi ngoai y muon | Visual QA theo component |
| Sort/filter icon lech state | DataTable/TreeTable kho dung | Review rieng nhom sort/filter |
| `BaseIcon` bi xoa som | Build unified va type build vo | Giu den khi build plumbing da doi |
| Bundle size tang | Package lon hon do `vue-iconsax` co 993 icon | Import theo file icon rieng, khong import barrel tong |

## Quyet dinh can chot truoc khi code

- Co giu public import `@app/oda-component/icons/*` trong ban publish tiep theo khong.
- Style mac dinh cua `vue-iconsax` nen la `linear`, `outline`, hay custom theo tung icon.
- Nhom `chevron*` va `angle*` dung `Arrow*2` hay `Arrow*3`.
- `times` nen dung `CloseSquare`, `CloseCircle`, hay custom close icon khong co vien.
- `spinner` giu SVG cu hay viet spinner moi theo style `vue-iconsax`.
- Co publish `icons` nhu subpath public tiep hay chi dung noi bo trong component library.

## Khuyen nghi thuc thi

Nen lam theo huong compatibility layer truoc. Day la cach it tac dong nhat vi khong phai sua hang loat component va van giu duoc public API cho consumer.

Sau khi da co wrapper on dinh va test pass, moi tinh viec refactor import trong component sang icon source moi hoac xoa han package `icons` khoi public API trong mot major version.
