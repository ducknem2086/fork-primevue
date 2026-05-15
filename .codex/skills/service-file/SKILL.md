---
name: vue-code-format
license: MIT
description: "guideline to create vue service file"
---

# TypeScript Service File Skill

## Mục đích
Skill này hướng dẫn Claude tạo mới hoặc chỉnh sửa TypeScript service file theo kiến trúc chuẩn của dự án,
đảm bảo chọn đúng axios plugin, đặt tên hàm nhất quán, và sử dụng đúng pattern xây dựng config request.

## Khi nào sử dụng skill này
- User yêu cầu tạo service file mới (`*Service.ts`)
- User yêu cầu thêm API function vào service hiện có
- User đề cập đến "gọi API", "tạo service", "fetch data", "call backend", "create service"
- User cần CRUD operations cho một resource
- User cần tích hợp endpoint mới từ một domain/env cụ thể

---

## 1. HAI PATTERN CHÍNH

### Pattern A — Direct Plugin Import (phổ biến, ~14/20 files)

Dùng khi: **Tất cả API calls đều thuộc cùng một domain đã có sẵn plugin.**

```typescript
import { handleRequest } from '@/plugins/axiosQueryEngine'; // thay bằng plugin phù hợp

export const getThings = async (id: string): Promise<any> => {
  const config = {
    method: 'GET' as const,
    url: `/resource/${id}`
  };
  return handleRequest(config);
};
```

**Ưu điểm:** Ít boilerplate, dùng ngay baseURL đã cấu hình sẵn trong plugin.

---

### Pattern B — createAxiosInstance (multi-domain, ~6/20 files)

Dùng khi:
- API calls trải rộng trên **nhiều domain / env var khác nhau** trong cùng một service
- Domain cần gọi **chưa có plugin sẵn** (không có file tương ứng trong `src/plugins/`)
- Cần gọi trực tiếp tới một URL cụ thể không qua biến môi trường chuẩn

```typescript
import { createAxiosInstance } from '@/plugins/createAxiosInstance';
import { toQueryString } from '@/utils/format';

const BASEURL = import.meta.env.VITE_API_TROUBLE_TICKET;
const { handleRequest } = createAxiosInstance(BASEURL);

// Domain thứ hai (nếu cần):
const BASEURL_OTHER = import.meta.env.VITE_API_ENTITY_CATALOG;
const { handleRequest: handleRequestOther } = createAxiosInstance(BASEURL_OTHER);
```

**Lưu ý:** Khi destructure nhiều instance, đặt alias rõ ràng: `handleRequest: handleRequestEntityCatalog`.

---

## 2. CHỌN ĐÚNG PLUGIN

| Plugin | Env Var | Domain / Mục đích |
|---|---|---|
| `axiosQueryEngine` | `VITE_API_URL_WIDGET` | Query engine, widget data, subscriber lookups |
| `axiosCustom360` | `VITE_API_URL_CCOS` | Customer 360, dynamic dashboard, widget management |
| `axiosCore` | `VITE_API_URL_EPC` | Core/EPC, characteristic category, IAM |
| `axiosBase` | `VITE_API_URL` | Base domain chung |
| `axiosAuth` | `VITE_API_URL_AUTH` | Authentication, refresh token |
| `axiosEPC` | `VITE_API_TROUBLE_TICKET` | EPC, trouble ticket (plugin cũ) |

**Quy tắc chọn:**
1. Xác định domain của endpoint từ URL pattern hoặc tài liệu API
2. Tra bảng trên — nếu có plugin khớp, dùng Pattern A
3. Nếu service gọi 2+ domain, hoặc không có plugin sẵn — dùng Pattern B với `createAxiosInstance`
4. Khi không chắc, hỏi user về env var hoặc domain của API

---

## 3. QUY TẮC ĐẶT TÊN

### File
- Format: `<Feature>Service.ts` hoặc `<Feature><SubFeature>Service.ts`
- Đặt trong `src/service/`
- PascalCase cho toàn bộ tên file

Ví dụ: `TroubleTicketService.ts`, `ProcessInstanceService.ts`, `DashboardManagerService.ts`

### Hàm
- camelCase, bắt đầu bằng động từ mô tả rõ hành động
- Các động từ phổ biến trong project:

| Động từ | Dùng cho |
|---|---|
| `get` | Lấy dữ liệu (GET) |
| `fetch` | Lấy dữ liệu, thường kèm filter |
| `create` | Tạo mới resource (POST) |
| `update` | Cập nhật toàn phần hoặc một phần (PUT/PATCH) |
| `delete` | Xoá resource (DELETE) |
| `start` | Khởi động process/instance |
| `copy` | Nhân bản resource |

Ví dụ: `getTroubleTicketListApi`, `createDashboard`, `deleteWidgetTemplate`, `startProcessAPI`

### Return type
- Luôn dùng `Promise<any>` — đây là convention của project, không tự tạo interface trừ khi user yêu cầu rõ ràng
- Ngoại lệ chấp nhận: type alias local `type ApiResponse = any` để documentation

---

## 4. URL & METHOD PATTERNS

### GET — Danh sách (có params tuỳ chọn)
```typescript
export const getListResource = async (params?: { offset?: number; limit?: number; name?: string }): Promise<any> => {
  const config = {
    method: 'GET' as const,
    url: '/resource',
    params: params || undefined
  };
  return handleRequest(config);
};
```

### GET — Chi tiết theo ID
```typescript
export const getDetailResource = async (id: string): Promise<any> => {
  const config = {
    method: 'GET' as const,
    url: `/resource/${id}`
  };
  return handleRequest(config);
};
```

### GET — Chi tiết theo phone/msisdn (pattern phổ biến trong project)
```typescript
export const fetchSubscriberData = async (phone: string, params?: any): Promise<any> => {
  const config = {
    method: 'GET' as const,
    url: `/resource/${phone}`,
    params: params || undefined
  };
  return handleRequest(config);
};
```

### POST — Tạo mới
```typescript
export const createResource = async (data: any): Promise<any> => {
  const config = {
    method: 'POST' as const,
    url: '/resource',
    data
  };
  return handleRequest(config);
};
```

### PATCH — Cập nhật một phần
```typescript
export const updateResource = async (id: string, data: any): Promise<any> => {
  const config = {
    method: 'PATCH' as const,
    url: `/resource/${id}`,
    data
  };
  return handleRequest(config);
};
```

### PUT — Cập nhật toàn bộ
```typescript
export const replaceResource = async (id: string, data: any): Promise<any> => {
  const config = {
    method: 'PUT' as const,
    url: `/resource/${id}`,
    data
  };
  return handleRequest(config);
};
```

### DELETE
```typescript
export const deleteResource = async (id: string): Promise<any> => {
  const config = {
    method: 'DELETE' as const,
    url: `/resource/${id}`
  };
  return handleRequest(config);
};
```

---

## 5. toQueryString — FILTER PARAMS PHỨC TẠP

Dùng `toQueryString` thay cho `params: {}` khi:
- Có nhiều filter tuỳ chọn (null/undefined/empty phải bị loại bỏ khỏi URL)
- API nhận query string theo kiểu `field.like=`, `field.in=`, `offset=`, `limit=`
- Cần kiểm soát chính xác thứ tự và nội dung query string

### Import
```typescript
import { toQueryString } from '@/utils/format';
```

### Cách hoạt động
```typescript
// Chỉ giữ lại các entry có giá trị khác undefined, null, ''
// src/utils/format.ts:89
export const toQueryString = (params: any) => {
  return Object.entries(params)
    .filter(([_, v]) => v !== undefined && v !== null && v !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v as string)}`)
    .join('&');
};
```

### Ví dụ sử dụng — Danh sách có filter
```typescript
import { createAxiosInstance } from '@/plugins/createAxiosInstance';
import { toQueryString } from '@/utils/format';

const BASEURL = import.meta.env.VITE_API_TROUBLE_TICKET;
const { handleRequest } = createAxiosInstance(BASEURL);

export type ResourceListParams = {
  offset?: number;
  limit?: number;
  name?: string;
  status?: string;
};

export const getResourceListApi = async (options: ResourceListParams = {}): Promise<any> => {
  const { name, offset, limit, status } = options;

  const params: Record<string, any> = {};
  if (offset !== undefined) params['offset'] = offset;
  if (limit !== undefined) params['limit'] = limit;
  if (name?.trim()) params['name.like'] = name.trim();
  if (status?.trim()) params['status'] = status.trim();

  const queryString = toQueryString(params);
  const config = {
    method: 'GET' as const,
    url: `/resource?${queryString}`
  };
  return handleRequest(config);
};
```

### Ví dụ — Search với optional keys
```typescript
export const getUserToAssignAPI = async (keySearch: any, listGroups: any, listUser: any): Promise<any> => {
  const params = {} as any;
  if (keySearch?.trim()) params['search'] = keySearch.trim();
  if (listGroups?.trim()) params['candidateGroups'] = listGroups.trim();
  if (listUser?.trim()) params['candidateUsers'] = listUser.trim();

  const queryString = toQueryString(params);
  const config = {
    method: 'GET' as const,
    url: `/resource/getUserToAssign?${queryString}`
  };
  return handleRequest(config);
};
```

---

## 6. VÍ DỤ HOÀN CHỈNH

### Pattern A — CRUD đơn domain

```typescript
import { handleRequest } from '@/plugins/axiosQueryEngine';

export const getListResourceApi = async (): Promise<any> => {
  const config = { method: 'GET' as const, url: '/api/resources' };
  return handleRequest(config);
};

export const getDetailResourceApi = async (id: string): Promise<any> => {
  const config = { method: 'GET' as const, url: `/api/resources/${id}` };
  return handleRequest(config);
};

export const createResourceApi = async (data: any): Promise<any> => {
  const config = { method: 'POST' as const, url: '/api/resources', data };
  return handleRequest(config);
};

export const updateResourceApi = async (id: string, data: any): Promise<any> => {
  const config = { method: 'PATCH' as const, url: `/api/resources/${id}`, data };
  return handleRequest(config);
};

export const deleteResourceApi = async (id: string): Promise<any> => {
  const config = { method: 'DELETE' as const, url: `/api/resources/${id}` };
  return handleRequest(config);
};
```

---

### Pattern B — Multi-domain với toQueryString

```typescript
import { createAxiosInstance } from '@/plugins/createAxiosInstance';
import { toQueryString } from '@/utils/format';

const BASE_URL = import.meta.env.VITE_API_TROUBLE_TICKET;
const BASE_URL_CATALOG = import.meta.env.VITE_API_ENTITY_CATALOG;

const { handleRequest } = createAxiosInstance(BASE_URL);
const { handleRequest: handleRequestCatalog } = createAxiosInstance(BASE_URL_CATALOG);

export type TicketListParams = { offset?: number; limit?: number; name?: string };

export const getTicketListApi = async (options: TicketListParams = {}): Promise<any> => {
  const { name, offset, limit } = options;
  const params: Record<string, any> = {};
  if (offset !== undefined) params['offset'] = offset;
  if (limit !== undefined) params['limit'] = limit;
  if (name?.trim()) params['name.like'] = name.trim();

  const config = { method: 'GET' as const, url: `/troubleTicket?${toQueryString(params)}` };
  return handleRequest(config);
};

export const getTicketDetailApi = async (id: string): Promise<any> => {
  const config = { method: 'GET' as const, url: `/troubleTicket/${id}` };
  return handleRequest(config);
};

export const createTicketApi = async (data: any): Promise<any> => {
  const config = { method: 'POST' as const, url: '/troubleTicket', data };
  return handleRequest(config);
};

export const updateTicketApi = async (id: string, data: any): Promise<any> => {
  const config = { method: 'PATCH' as const, url: `/troubleTicket/${id}`, data };
  return handleRequest(config);
};

export const deleteTicketApi = async (id: string): Promise<any> => {
  const config = { method: 'DELETE' as const, url: `/troubleTicket/${id}` };
  return handleRequest(config);
};

// Gọi domain thứ hai trong cùng service
export const getCatalogItemApi = async (id: string): Promise<any> => {
  const config = { method: 'GET' as const, url: `/entityODACatalogItem?specification.id=${id}&fields=name,code` };
  return handleRequestCatalog(config);
};
```

---

### Pattern — Subscriber lookup (phone-based, axiosQueryEngine)

```typescript
import { handleRequest } from '@/plugins/axiosQueryEngine';

export const fetchSubscriberHistory = async (phone: string, params?: any): Promise<any> => {
  const config = { method: 'GET' as const, url: `/subscriber-history/${phone}`, params: params || undefined };
  return handleRequest(config);
};

export const getSmsSentBySubscriber = async ({
  msisdn,
  fromDate,
  toDate,
  limit = 10,
  page = 0
}: {
  msisdn: string;
  fromDate: string;
  toDate: string;
  limit?: number;
  page?: number;
}): Promise<any> => {
  const config = {
    method: 'GET' as const,
    url: `/sms-sent-by-subscriber/${msisdn}`,
    params: { fromDate, toDate, limit, page }
  };
  return handleRequest(config);
};
```

---

### Pattern — Hai plugin trong cùng một service file

```typescript
import { handleRequest } from '@/plugins/axiosCustom360';
import { handleRequest as handleRequestQuery } from '@/plugins/axiosQueryEngine';

export const getDetailDashboard = async (id: string): Promise<any> => {
  const config = { method: 'GET' as const, url: `/dynamicDashboard/${id}` };
  return handleRequest(config);
};

export const getSimLookup = async (phoneNumber: string): Promise<any> => {
  const config = { method: 'GET' as const, url: `/subscriber-number-lookup-by-msin/${phoneNumber}` };
  return handleRequestQuery(config);
};
```

---

## 7. CHECKLIST TRƯỚC KHI HOÀN THÀNH

- [ ] Chọn đúng Pattern A hoặc B dựa trên số lượng domain
- [ ] Import plugin hoặc `createAxiosInstance` đúng
- [ ] Tất cả method string có `as const`
- [ ] Tên hàm bắt đầu bằng động từ rõ nghĩa (get, create, update, delete, fetch, start...)
- [ ] Tên file đúng format `<Feature>Service.ts`, đặt trong `src/service/`
- [ ] Dùng `params: params || undefined` — không truyền object rỗng `{}`
- [ ] Dùng `toQueryString` khi có filter tuỳ chọn thay vì nối chuỗi thủ công
- [ ] Khi nhiều domain: destructure alias rõ ràng `handleRequest: handleRequestXxx`
- [ ] Return type `Promise<any>` trên tất cả exported functions
- [ ] Không import `axios` trực tiếp — luôn đi qua plugin hoặc `createAxiosInstance`

---

## 8. ANTI-PATTERNS CẦN TRÁNH

```typescript
// ❌ Không dùng axios trực tiếp
import axios from 'axios';

// ❌ Không truyền object rỗng cho params
params: {}
// ✅ Dùng: params: params || undefined

// ❌ Không nối chuỗi URL thủ công khi có nhiều filter tuỳ chọn
url: `/resource?name=${name}&offset=${offset}`
// ✅ Dùng: toQueryString(params)

// ❌ Không copy toQueryString vào service file — import từ src/utils/format.ts
const toQueryString = (params: any) => { ... };

// ❌ Không dùng sai plugin cho sai domain
import { handleRequest } from '@/plugins/axiosAuth'; // cho resource không liên quan auth
```
