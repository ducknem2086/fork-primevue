---
name: vue-primevue
license: MIT
description: "format code for current design pattern"
---

# Vue Component Architecture Skill

## Purpose
This skill guides Claude/Codex/Gemini to create or modify Vue components following a standardized architecture, ensuring well-organized, maintainable code that adheres to TypeScript best practices.

## When to use this skill
- User requests to create a new Vue component
- User requests to edit/refactor an existing Vue component
- User mentions organizing code in Vue components
- User wants to create components with TypeScript and SCSS
- User needs components with test-dataid attributes
- **User mentions "using primevue"** - use PrimeVue v4 components

## Component Architecture

### 1. FILE STRUCTURE (.vue)

```vue
<template>
  <!-- Template section -->
</template>

<script setup lang="ts">
  // Script section
</script>

<style scoped lang="scss">
  // Style section
</style>
```

---

## 2. TEMPLATE SECTION

### Template Rules

#### A. Every element must have `data-testid`
- All important elements must have a `data-testid` attribute
- The `data-testid` value should clearly describe the element's function
- Format: `component-name-element-purpose`

```vue
<!-- CORRECT -->
<section class="user-profile-container" data-testid="user-profile-container">
  <div class="user-profile-avatar" data-testid="user-profile-avatar">
    <img :src="avatarUrl" />
  </div>
  <h2 class="user-profile-name" data-testid="user-profile-name">
    {{ userName }}
  </h2>
  <button class="user-profile-action" data-testid="user-profile-action">
    Edit Profile
  </button>
</section>

<!-- INCORRECT - missing data-testid -->
<section class="user-profile-container">
  <div class="user-profile-avatar">
    <img :src="avatarUrl" />
  </div>
</section>
```

#### B. Class naming: Block-Element-Modified
- Format: `block-element-modifier`
- **DO NOT** use BEM (block__element--modifier)
- Use `-` as separator

```vue
<!-- CORRECT: block-element-modified -->
<article class="card-header-active" data-testid="card-header">
  <h3 class="card-title-large" data-testid="card-title">Title</h3>
  <button class="card-action-disabled" data-testid="card-action">Action</button>
</article>

<!-- INCORRECT: BEM style -->
<article class="card__header--active">
  <h3 class="card__title--large">Title</h3>
</article>
```

#### C. Binding logic - Prefer TypeScript Enum
- **MINIMIZE** hardcoded values
- **PREFER** TypeScript Enum for values used multiple times
- Applicable to: status, type, role, theme, etc.

```vue
<template>
  <!-- CORRECT: Use enum -->
  <span 
    class="status-badge-container"
    data-testid="status-badge"
    :class="getStatusClass(order.status)"
  >
    {{ order.status }}
  </span>

  <!-- CORRECT: Conditional with enum -->
  <section 
    v-if="userRole === UserRole.ADMIN"
    class="admin-panel-container"
    data-testid="admin-panel"
  >
    <h2>Admin Content</h2>
  </section>

  <!-- INCORRECT: Hardcoded -->
  <section v-if="userRole === 'admin'">
    <h2>Admin Content</h2>
  </section>
</template>

<script setup lang="ts">
// Define enums
enum OrderStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  CANCELLED = 'cancelled'
}

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

const getStatusClass = (status: OrderStatus): string => {
  switch (status) {
    case OrderStatus.PENDING:
      return 'status-badge-pending'
    case OrderStatus.PROCESSING:
      return 'status-badge-processing'
    case OrderStatus.COMPLETED:
      return 'status-badge-completed'
    case OrderStatus.CANCELLED:
      return 'status-badge-cancelled'
    default:
      return 'status-badge-default'
  }
}
</script>
```

### Complete Template Example

```vue
<template>
  <article class="product-card-container" data-testid="product-card-container">
    <figure class="product-card-image" data-testid="product-card-image">
      <img :src="product?.imageUrl ?? defaultImage" :alt="product?.name" />
    </figure>
    
    <div class="product-card-content" data-testid="product-card-content">
      <h3 class="product-card-title" data-testid="product-card-title">
        {{ product?.name ?? 'Unknown Product' }}
      </h3>
      
      <p class="product-card-price" data-testid="product-card-price">
        {{ formatPrice(product?.price) }}
      </p>
      
      <span 
        v-if="product?.status === ProductStatus.AVAILABLE"
        class="product-card-status-available"
        data-testid="product-card-status"
      >
        Available
      </span>
      
      <button 
        class="product-card-action"
        data-testid="product-card-action"
        @click="handleAddToCart"
      >
        Add to Cart
      </button>
    </div>
  </article>
</template>
```

---

## 2A. PRIMEVUE INTEGRATION (When prompt contains "using primevue")

### When to use PrimeVue
- **TRIGGER**: User prompt contains keyword **"using primevue"**
- When triggered, **PREFER** PrimeVue v4 components over basic HTML elements
- Still maintain rules: `data-testid`, class naming `block-element-modifier`, TypeScript Enum

### Common PrimeVue v4 Components

#### Form Components
```vue
<!-- Button -->
<Button 
  label="Save" 
  icon="pi pi-check"
  severity="success"
  data-testid="form-button-save"
  @click="handleSave"
/>

<!-- InputText -->
<InputText 
  v-model="formData.name"
  placeholder="Enter name"
  data-testid="form-input-name"
/>

<!-- InputNumber -->
<InputNumber 
  v-model="formData.price"
  :min="0"
  :max-fraction-digits="2"
  data-testid="form-input-price"
/>

<!-- Textarea -->
<Textarea 
  v-model="formData.description"
  rows="5"
  data-testid="form-textarea-description"
/>

<!-- Dropdown -->
<Dropdown 
  v-model="selectedCategory"
  :options="categories"
  option-label="name"
  option-value="id"
  placeholder="Select category"
  data-testid="form-dropdown-category"
/>

<!-- Calendar -->
<Calendar 
  v-model="formData.date"
  date-format="dd/mm/yy"
  data-testid="form-calendar-date"
/>

<!-- MultiSelect -->
<MultiSelect 
  v-model="selectedTags"
  :options="tags"
  option-label="name"
  placeholder="Select tags"
  data-testid="form-multiselect-tags"
/>
```

#### Data Display Components
```vue
<!-- DataTable -->
<DataTable 
  :value="products"
  :paginator="true"
  :rows="10"
  data-testid="product-table"
>
  <Column field="name" header="Product Name" data-testid="product-table-column-name" />
  <Column field="price" header="Price" data-testid="product-table-column-price">
    <template #body="slotProps">
      {{ formatPrice(slotProps.data.price) }}
    </template>
  </Column>
  <Column header="Actions" data-testid="product-table-column-actions">
    <template #body="slotProps">
      <Button 
        icon="pi pi-pencil" 
        severity="info"
        @click="handleEdit(slotProps.data)"
      />
    </template>
  </Column>
</DataTable>

<!-- Card -->
<Card data-testid="product-card">
  <template #title>{{ product.name }}</template>
  <template #content>
    <p>{{ product.description }}</p>
  </template>
  <template #footer>
    <Button label="Buy Now" @click="handleBuy" />
  </template>
</Card>
```

#### Overlay Components
```vue
<!-- Dialog -->
<Dialog 
  v-model:visible="showDialog"
  header="Edit Product"
  :modal="true"
  data-testid="product-dialog"
>
  <div class="product-dialog-content" data-testid="product-dialog-content">
    <!-- Dialog content -->
  </div>
  <template #footer>
    <Button label="Cancel" severity="secondary" @click="closeDialog" />
    <Button label="Save" @click="saveProduct" />
  </template>
</Dialog>

<!-- Toast (used in script, not needed in template for logic) -->
<!-- Declare in template: -->
<Toast data-testid="app-toast" />
```

#### Menu Components
```vue
<!-- Menu -->
<Menu :model="menuItems" data-testid="nav-menu" />

<!-- Menubar -->
<Menubar :model="menubarItems" data-testid="app-menubar">
  <template #start>
    <img src="/logo.png" height="40" />
  </template>
  <template #end>
    <Button label="Logout" @click="handleLogout" />
  </template>
</Menubar>
```

#### Misc Components
```vue
<!-- Avatar -->
<Avatar 
  :image="user?.avatarUrl"
  shape="circle"
  size="large"
  data-testid="user-avatar"
/>

<!-- Badge -->
<Badge :value="cartCount" severity="danger" data-testid="cart-badge" />

<!-- ProgressBar -->
<ProgressBar :value="uploadProgress" data-testid="upload-progress" />

<!-- ProgressSpinner -->
<ProgressSpinner v-if="isLoading" data-testid="loading-spinner" />

<!-- FileUpload -->
<FileUpload 
  mode="basic"
  accept="image/*"
  :max-file-size="1000000"
  @select="onFileSelect"
  data-testid="file-upload"
/>
```

### Import PrimeVue Components

```typescript
<script setup lang="ts">
// 1. IMPORT PATHS
import { ref, reactive, computed, onMounted } from 'vue'

// PrimeVue Components
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

// Other imports...
import { useRouter } from 'vue-router'
import type { Product } from '@/types'

// ...rest of script
</script>
```

### Complete PrimeVue Component Example

```vue
<template>
  <div class="product-management-container" data-testid="product-management-container">
    <Toast data-testid="app-toast" />
    
    <Card class="product-management-card" data-testid="product-management-card">
      <template #title>
        <h2>Product Management</h2>
      </template>
      
      <template #content>
        <div class="product-management-toolbar" data-testid="product-management-toolbar">
          <Button 
            label="Add Product" 
            icon="pi pi-plus"
            severity="success"
            data-testid="product-button-add"
            @click="openAddDialog"
          />
        </div>

        <DataTable 
          :value="products"
          :loading="isLoading"
          :paginator="true"
          :rows="10"
          data-testid="product-table"
        >
          <Column 
            field="name" 
            header="Name" 
            sortable
            data-testid="product-table-column-name"
          />
          
          <Column 
            field="price" 
            header="Price" 
            sortable
            data-testid="product-table-column-price"
          >
            <template #body="slotProps">
              {{ formatPrice(slotProps.data.price) }}
            </template>
          </Column>
          
          <Column 
            field="status" 
            header="Status"
            data-testid="product-table-column-status"
          >
            <template #body="slotProps">
              <Badge 
                :value="slotProps.data.status"
                :severity="getStatusSeverity(slotProps.data.status)"
              />
            </template>
          </Column>
          
          <Column 
            header="Actions"
            data-testid="product-table-column-actions"
          >
            <template #body="slotProps">
              <Button 
                icon="pi pi-pencil" 
                severity="info"
                text
                data-testid="product-button-edit"
                @click="handleEdit(slotProps.data)"
              />
              <Button 
                icon="pi pi-trash" 
                severity="danger"
                text
                data-testid="product-button-delete"
                @click="handleDelete(slotProps.data)"
              />
            </template>
          </Column>
        </DataTable>
      </template>
    </Card>

    <Dialog 
      v-model:visible="showProductDialog"
      :header="dialogMode === DialogMode.CREATE ? 'Add Product' : 'Edit Product'"
      :modal="true"
      :style="{ width: '500px' }"
      data-testid="product-dialog"
    >
      <div class="product-dialog-content" data-testid="product-dialog-content">
        <div class="product-dialog-field" data-testid="product-dialog-field-name">
          <label for="name">Name</label>
          <InputText 
            id="name"
            v-model="formData.name"
            placeholder="Enter product name"
            class="product-dialog-input-name"
            data-testid="product-dialog-input-name"
          />
        </div>

        <div class="product-dialog-field" data-testid="product-dialog-field-price">
          <label for="price">Price</label>
          <InputNumber 
            id="price"
            v-model="formData.price"
            mode="currency"
            currency="VND"
            locale="vi-VN"
            class="product-dialog-input-price"
            data-testid="product-dialog-input-price"
          />
        </div>

        <div class="product-dialog-field" data-testid="product-dialog-field-category">
          <label for="category">Category</label>
          <Dropdown 
            id="category"
            v-model="formData.categoryId"
            :options="categories"
            option-label="name"
            option-value="id"
            placeholder="Select category"
            class="product-dialog-dropdown-category"
            data-testid="product-dialog-dropdown-category"
          />
        </div>
      </div>

      <template #footer>
        <Button 
          label="Cancel" 
          severity="secondary"
          data-testid="product-dialog-button-cancel"
          @click="closeDialog"
        />
        <Button 
          label="Save" 
          data-testid="product-dialog-button-save"
          @click="saveProduct"
        />
      </template>
    </Dialog>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Dropdown from 'primevue/dropdown'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Dialog from 'primevue/dialog'
import Card from 'primevue/card'
import Badge from 'primevue/badge'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

import type { Product, Category } from '@/types'
import { ProductService } from '@/services/ProductService'

enum DialogMode {
  CREATE = 'create',
  EDIT = 'edit'
}

enum ProductStatus {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'out_of_stock'
}

const toast = useToast()

const productService = new ProductService()

const products = ref<Product[]>([])
const categories = ref<Category[]>([])
const isLoading = ref<boolean>(false)
const showProductDialog = ref<boolean>(false)
const dialogMode = ref<DialogMode>(DialogMode.CREATE)

const formData = reactive({
  name: '',
  price: 0,
  categoryId: null as number | null
})

const formatPrice = (price?: number): string => {
  return price?.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }) ?? '0 VND'
}

const getStatusSeverity = (status: ProductStatus): string => {
  switch (status) {
    case ProductStatus.AVAILABLE:
      return 'success'
    case ProductStatus.OUT_OF_STOCK:
      return 'danger'
    default:
      return 'info'
  }
}

const openAddDialog = (): void => {
  dialogMode.value = DialogMode.CREATE
  formData.name = ''
  formData.price = 0
  formData.categoryId = null
  showProductDialog.value = true
}

const handleEdit = (product: Product): void => {
  dialogMode.value = DialogMode.EDIT
  formData.name = product.name
  formData.price = product.price
  formData.categoryId = product.categoryId
  showProductDialog.value = true
}

const handleDelete = async (product: Product): Promise<void> => {
  try {
    await productService.delete(product.id)
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product deleted successfully',
      life: 3000
    })
    await fetchProducts()
  } catch (err) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to delete product',
      life: 3000
    })
  }
}

const saveProduct = async (): Promise<void> => {
  try {
    if (dialogMode.value === DialogMode.CREATE) {
      await productService.create(formData)
    } else {
      await productService.update(formData)
    }
    
    toast.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Product saved successfully',
      life: 3000
    })
    
    closeDialog()
    await fetchProducts()
  } catch (err) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to save product',
      life: 3000
    })
  }
}

const closeDialog = (): void => {
  showProductDialog.value = false
}

const fetchProducts = async (): Promise<void> => {
  isLoading.value = true
  try {
    const response = await productService.getAll()
    products.value = response?.data ?? []
  } catch (err) {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: 'Failed to fetch products',
      life: 3000
    })
  } finally {
    isLoading.value = false
  }
}

onMounted(async () => {
  await fetchProducts()
})
</script>

<style scoped lang="scss">
$spacing: 16px;

.product-management-container {
  padding: $spacing * 2;
}

.product-management-card {
  margin-bottom: $spacing * 2;
}

.product-management-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: $spacing * 2;
}

.product-dialog-content {
  display: flex;
  flex-direction: column;
  gap: $spacing * 1.5;
}

.product-dialog-field {
  display: flex;
  flex-direction: column;
  gap: $spacing * 0.5;

  label {
    font-weight: 600;
    font-size: 14px;
  }
}
</style>
```

### PrimeVue Styling
- PrimeVue components come with built-in styling
- Can customize via CSS variables or themes
- Still need custom styles for layout and spacing
- Use `class` attribute to add custom classes

### PrimeVue Icons
- PrimeVue uses PrimeIcons: `pi pi-{icon-name}`
- Common icons: `pi-check`, `pi-times`, `pi-pencil`, `pi-trash`, `pi-plus`, `pi-search`
- See full list at: https://primevue.org/icons

---

## 3. SCRIPT SECTION

### Code organization in the following order:

```typescript
<script setup lang="ts">
// 1. IMPORT PATHS
import { ref, reactive, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useToast } from '@/composables/useToast'

// PrimeVue imports (if prompt contains "using primevue")
// import Button from 'primevue/button'
// import InputText from 'primevue/inputtext'
// import DataTable from 'primevue/datatable'
// ... other PrimeVue components

import type { Product, User } from '@/types'
import { ProductService } from '@/services/ProductService'

// 2. ENUMS & TYPES (if defining locally)
enum ProductStatus {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'out_of_stock',
  DISCONTINUED = 'discontinued'
}

interface Props {
  productId: string
  userId?: string
}

// 3. HOOK STATE (composables)
const router = useRouter()
const route = useRoute()
const toast = useToast()

// 4. PROVIDER (inject)
const apiClient = inject<ApiClient>('apiClient')
const authStore = inject<AuthStore>('authStore')

// 5. SERVICE STATE
const productService = new ProductService()
const userService = new UserService()

// 6. INPUT/OUTPUT (Props, Emits, Slots)
const props = withDefaults(defineProps<Props>(), {
  userId: undefined
})

const emit = defineEmits<{
  productUpdated: [product: Product]
  error: [message: string]
}>()

// 7. VUE REACTIVITY DATA
const product = ref<Product | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)

const formData = reactive({
  name: '',
  price: 0,
  quantity: 0
})

const isFormValid = computed(() => {
  return formData.name.trim() !== '' && formData.price > 0
})

// 8. FUNCTION LOGIC
const handleAddToCart = async (): Promise<void> => {
  if (!product.value) {
    toast.error('Product not found')
    return
  }

  try {
    await productService.addToCart(product.value.id)
    toast.success('Added to cart successfully')
    emit('productUpdated', product.value)
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : 'Unknown error'
    toast.error(errorMessage)
    emit('error', errorMessage)
  }
}

const fetchProduct = async (): Promise<void> => {
  isLoading.value = true
  error.value = null

  try {
    // Nullable path handling
    const response = await productService.getById(props.productId)
    product.value = response?.data ?? null
    
    if (!product.value) {
      throw new Error('Product not found')
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch product'
    toast.error(error.value)
  } finally {
    isLoading.value = false
  }
}

const formatPrice = (price?: number): string => {
  return price?.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }) ?? '0 VND'
}

// 9. LIFECYCLE HOOKS
onMounted(async () => {
  await fetchProduct()
})

// 10. EXPOSE (if needed to expose externally)
defineExpose({
  refreshProduct: fetchProduct,
  resetForm: () => {
    formData.name = ''
    formData.price = 0
    formData.quantity = 0
  }
})
</script>
```

### Type Checking & Nullable Handling

```typescript
// CORRECT: Proper type checking and nullable handling
const user = ref<User | null>(null)

const getUserName = (): string => {
  return user.value?.name ?? 'Guest'
}

const processData = (data?: ApiResponse): void => {
  if (!data?.success) {
    console.error('Invalid response')
    return
  }
  
  const items = data.items ?? []
  items.forEach(item => {
    console.log(item?.title ?? 'No title')
  })
}

// INCORRECT: Not handling nullable
const getUserName = (): string => {
  return user.value.name // Error if user.value is null
}
```

---

## 4. STYLE SECTION

### Organize SCSS in this order:

```scss
<style scoped lang="scss">
// 1. VARIABLES
$primary-color: #3490dc;
$secondary-color: #ffed4e;
$text-color: #333;
$border-radius: 8px;
$spacing-unit: 8px;

// Breakpoints
$breakpoint-mobile: 768px;
$breakpoint-tablet: 1024px;
$breakpoint-desktop: 1440px;

// 2. COMMON CLASSES (Shared/Reusable)
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.text-ellipsis {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.shadow-card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

// 3. BLOCK/CONTAINER SPECIFIC CLASSES
.product-card-container {
  display: flex;
  flex-direction: column;
  padding: $spacing-unit * 2;
  border-radius: $border-radius;
  background-color: white;
  @extend .shadow-card;
}

.product-card-image {
  width: 100%;
  height: 200px;
  border-radius: $border-radius;
  overflow: hidden;
  margin-bottom: $spacing-unit * 2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.product-card-content {
  display: flex;
  flex-direction: column;
  gap: $spacing-unit;
}

.product-card-title {
  font-size: 18px;
  font-weight: 600;
  color: $text-color;
  @extend .text-ellipsis;
}

.product-card-price {
  font-size: 20px;
  font-weight: 700;
  color: $primary-color;
}

.product-card-status-available {
  display: inline-block;
  padding: 4px 12px;
  background-color: #10b981;
  color: white;
  border-radius: 4px;
  font-size: 14px;
}

.product-card-action {
  @extend .flex-center;
  padding: $spacing-unit * 1.5;
  background-color: $primary-color;
  color: white;
  border-radius: $border-radius;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: darken($primary-color, 10%);
  }

  &:active {
    transform: scale(0.98);
  }
}

// 4. MEDIA QUERIES (Responsive)
@media (max-width: $breakpoint-mobile) {
  .product-card-container {
    padding: $spacing-unit;
  }

  .product-card-image {
    height: 150px;
  }

  .product-card-title {
    font-size: 16px;
  }

  .product-card-price {
    font-size: 18px;
  }
}

@media (min-width: $breakpoint-mobile + 1) and (max-width: $breakpoint-tablet) {
  .product-card-container {
    padding: $spacing-unit * 1.5;
  }

  .product-card-image {
    height: 180px;
  }
}

@media (min-width: $breakpoint-desktop) {
  .product-card-container {
    max-width: 400px;
  }

  .product-card-image {
    height: 250px;
  }
}
</style>
```

---

## CHECKLIST WHEN CREATING COMPONENTS

### Template:
- [ ] Use appropriate semantic HTML elements (or PrimeVue components if prompt contains "using primevue")
- [ ] Every important element has `data-testid`
- [ ] Class naming follows `block-element-modifier` format
- [ ] Use TypeScript Enum instead of hardcoded values
- [ ] Proper v-if, v-for, v-bind usage
- [ ] **[PrimeVue]** Import correct components from primevue
- [ ] **[PrimeVue]** Use PrimeIcons for icons

### Script:
- [ ] Import paths at the top
- [ ] Hook state (useRouter, useToast,...)
- [ ] Provider (inject) if needed
- [ ] Service instances if needed
- [ ] Props/Emits defined with correct types
- [ ] Reactive data with proper typing
- [ ] Function logic has type annotations
- [ ] Lifecycle hooks in correct position
- [ ] Expose functions if needed
- [ ] Handle nullable with `?.` and `??`
- [ ] Try-catch for async operations

### Style:
- [ ] SCSS variables defined
- [ ] Common classes are reusable
- [ ] Block-specific classes are organized
- [ ] Media queries for responsive design
- [ ] Scoped attribute added

---

## COMPLETE COMPONENT EXAMPLE

```vue
<template>
  <article 
    class="user-profile-container" 
    data-testid="user-profile-container"
  >
    <div 
      v-if="isLoading" 
      class="user-profile-loading"
      data-testid="user-profile-loading"
    >
      Loading...
    </div>

    <div 
      v-else-if="error" 
      class="user-profile-error"
      data-testid="user-profile-error"
    >
      {{ error }}
    </div>

    <section 
      v-else-if="user"
      class="user-profile-content"
      data-testid="user-profile-content"
    >
      <figure 
        class="user-profile-avatar"
        data-testid="user-profile-avatar"
      >
        <img :src="user.avatarUrl ?? defaultAvatar" :alt="user.name" />
      </figure>

      <div 
        class="user-profile-info"
        data-testid="user-profile-info"
      >
        <h2 
          class="user-profile-name"
          data-testid="user-profile-name"
        >
          {{ user.name }}
        </h2>

        <p 
          class="user-profile-email"
          data-testid="user-profile-email"
        >
          {{ user.email }}
        </p>

        <span 
          v-if="user.role === UserRole.ADMIN"
          class="user-profile-badge-admin"
          data-testid="user-profile-badge"
        >
          Admin
        </span>
      </div>

      <div 
        class="user-profile-actions"
        data-testid="user-profile-actions"
      >
        <button 
          class="user-profile-button-edit"
          data-testid="user-profile-button-edit"
          @click="handleEdit"
        >
          Edit Profile
        </button>

        <button 
          class="user-profile-button-logout"
          data-testid="user-profile-button-logout"
          @click="handleLogout"
        >
          Logout
        </button>
      </div>
    </section>
  </article>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useToast } from '@/composables/useToast'
import type { User } from '@/types/user'
import { UserService } from '@/services/UserService'

enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest'
}

interface Props {
  userId: string
}

const router = useRouter()
const toast = useToast()

const authStore = inject<AuthStore>('authStore')

const userService = new UserService()

const props = defineProps<Props>()

const emit = defineEmits<{
  userUpdated: [user: User]
  logout: []
}>()

const user = ref<User | null>(null)
const isLoading = ref<boolean>(false)
const error = ref<string | null>(null)
const defaultAvatar = '/images/default-avatar.png'

const fetchUser = async (): Promise<void> => {
  isLoading.value = true
  error.value = null

  try {
    const response = await userService.getById(props.userId)
    user.value = response?.data ?? null

    if (!user.value) {
      throw new Error('User not found')
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : 'Failed to fetch user'
    toast.error(error.value)
  } finally {
    isLoading.value = false
  }
}

const handleEdit = (): void => {
  if (!user.value) return
  router.push(`/users/${user.value.id}/edit`)
}

const handleLogout = async (): Promise<void> => {
  try {
    await authStore?.logout()
    emit('logout')
    toast.success('Logged out successfully')
    router.push('/login')
  } catch (err) {
    toast.error('Failed to logout')
  }
}

onMounted(async () => {
  await fetchUser()
})

defineExpose({
  refreshUser: fetchUser
})
</script>

<style scoped lang="scss">
$primary-color: #3490dc;
$danger-color: #e74c3c;
$text-color: #333;
$border-color: #e0e0e0;
$spacing: 16px;

$breakpoint-mobile: 768px;

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-profile-container {
  max-width: 600px;
  margin: 0 auto;
  padding: $spacing * 2;
}

.user-profile-loading,
.user-profile-error {
  @extend .flex-center;
  padding: $spacing * 3;
  font-size: 16px;
}

.user-profile-error {
  color: $danger-color;
}

.user-profile-content {
  display: flex;
  flex-direction: column;
  gap: $spacing * 1.5;
  padding: $spacing * 2;
  border: 1px solid $border-color;
  border-radius: 12px;
  background-color: white;
}

.user-profile-avatar {
  @extend .flex-center;
  
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
}

.user-profile-info {
  display: flex;
  flex-direction: column;
  gap: $spacing * 0.5;
  text-align: center;
}

.user-profile-name {
  font-size: 24px;
  font-weight: 700;
  color: $text-color;
}

.user-profile-email {
  font-size: 16px;
  color: #666;
}

.user-profile-badge-admin {
  display: inline-block;
  align-self: center;
  padding: 4px 12px;
  background-color: #10b981;
  color: white;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
}

.user-profile-actions {
  display: flex;
  gap: $spacing;
  margin-top: $spacing;
}

.user-profile-button-edit,
.user-profile-button-logout {
  @extend .flex-center;
  flex: 1;
  padding: $spacing;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.user-profile-button-edit {
  background-color: $primary-color;
  color: white;

  &:hover {
    background-color: darken($primary-color, 10%);
  }
}

.user-profile-button-logout {
  background-color: white;
  color: $danger-color;
  border: 2px solid $danger-color;

  &:hover {
    background-color: $danger-color;
    color: white;
  }
}

@media (max-width: $breakpoint-mobile) {
  .user-profile-container {
    padding: $spacing;
  }

  .user-profile-content {
    padding: $spacing;
  }

  .user-profile-avatar img {
    width: 80px;
    height: 80px;
  }

  .user-profile-name {
    font-size: 20px;
  }

  .user-profile-actions {
    flex-direction: column;
  }
}
</style>
```

---

## IMPORTANT NOTES

1. **TypeScript Strict Mode**: Always enable strict type checking
2. **Nullable Handling**: Always use `?.` and `??` for optional values
3. **Error Handling**: Wrap async operations in try-catch
4. **Performance**: Use `computed` for derived state
5. **Accessibility**: Add aria-labels when needed (can be added to div)
6. **Testing**: data-testid must clearly describe element functionality
7. **Scoped Styles**: Always use `scoped` to avoid style conflicts
8. **Code Organization**: Follow the specified order in script and style sections

---

## CONCLUSION

This skill ensures:
- Code with clear structure, easy to maintain
- Type safety with TypeScript
- Testable with data-testid
- Responsive design with media queries
- Reusable code with enums and common classes
- Proper error handling and nullable checks
