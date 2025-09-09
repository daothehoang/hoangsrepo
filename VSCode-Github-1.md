# Hướng Dẫn Sử Dụng Git & GitHub Với VS Code

Tài liệu này mình đã tổng hợp quy trình làm việc và các lệnh Git cơ bản dành cho người mới bắt đầu sử dụng VS Code để làm việc với một dự án có sẵn trên GitHub.

---

## Phần 1: Quy Trình Làm Việc Từ A-Z Cho Người Mới

Đây là các bước đầy đủ từ lúc lấy code về máy cho đến khi đóng góp thành công một thay đổi.

### Giai đoạn 1: Chuẩn bị (Chỉ làm 1 lần)

1.  **Cài đặt công cụ:**
    *   Cài đặt [Git](https://git-scm.com/).
    *   Cài đặt [Visual Studio Code](https://code.visualstudio.com/).

2.  **Cấu hình Git:**
    Mở terminal trong VS Code (`Terminal` > `New Terminal`) và chạy hai lệnh sau để định danh các commit của bạn:
    ```bash
    git config --global user.name "Tên Của Bạn"
    git config --global user.email "emailcuaban@example.com"
    ```
    Ví dụ:
    ```bash
    git config --global user.name "Đào Thế Hoàng"
    git config --global user.email "douthewild@gmail.com"
    ```
    Kiểm tra các định danh đã nhập bằng cách chạy 2 lệnh sau:
    ```bash
    git config --global user.name
    git config --global user.email
    ```
    Hoặc xem tất cả các cấu hình ở mức global bạn đã thiết lập, dùng 1 lệnh sau:
    ```bash
    git config --global --list
    ```
### Giai đoạn 2: Lấy code về máy (Clone)

1.  **Lấy URL của kho lưu trữ** từ trang chủ dự án trên GitHub (nút màu xanh `< > Code`).
2.  **Sao chép (Clone) dự án về máy** bằng lệnh:
    ```bash
    git clone <URL-ban-vua-copy>
    ```
3.  **Mở dự án trong VS Code** bằng cách vào `File > Open Folder...` và chọn thư mục dự án vừa tạo.

### Giai đoạn 3: Chu trình làm việc hàng ngày

1.  **Cập nhật code mới nhất:** Luôn bắt đầu bằng cách kéo những thay đổi mới nhất từ nhánh chính.
    ```bash
    git checkout main
    git pull
    ```
2.  **Tạo nhánh mới:** Tạo một nhánh riêng cho mỗi tính năng hoặc bản sửa lỗi.
    ```bash
    git checkout -b <ten-nhanh-moi>
    ```
    > *Ví dụ: `git checkout -b feature/login-page`*

3.  **Viết code:** Thực hiện các thay đổi của bạn trong VS Code.

4.  **Lưu thay đổi (Commit):**
    *   Đưa các tệp đã thay đổi vào "khu vực chờ":
        ```bash
        git add .
        ```
    *   Ghi lại các thay đổi với một thông điệp rõ ràng:
        ```bash
        git commit -m "Feat: Hoàn thành trang đăng nhập"
        ```
    > **Mẹo:** Bạn có thể dùng giao diện ở tab "Source Control" trong VS Code để thực hiện bước này.

5.  **Đẩy nhánh lên GitHub:**
    ```bash
    git push -u origin <ten-nhanh-moi>
    ```

6.  **Tạo Pull Request (PR):**
    *   Mở trang GitHub của dự án.
    *   Nhấn vào nút "Compare & pull request" hiện ra.
    *   Điền thông tin và tạo PR để mọi người xem xét code của bạn.

### Giai đoạn 4: Dọn dẹp

Sau khi PR của bạn được hợp nhất (merged):
1.  Cập nhật lại nhánh `main` ở máy của bạn:
    ```bash
    git checkout main
    git pull
    ```
2.  Xóa nhánh đã làm việc xong:
    ```bash
    git branch -d <ten-nhanh-moi>
    ```

---

## Phần 2: Phân Biệt `git clone` và `git pull`

| Tiêu chí | `git clone` | `git pull` |
| :--- | :--- | :--- |
| **Hành động** | **Tạo mới** một bản sao dự án | **Cập nhật** một bản sao đã có |
| **Tần suất** | Chỉ **1 lần** cho mỗi dự án | **Thường xuyên** |
| **Kết quả** | Tạo ra một thư mục dự án mới | Cập nhật tệp tin trong thư mục hiện tại |

---

## Phần 3: Sổ Tay Các Lệnh Git Thường Dùng

### Đồng bộ hóa
*   `git pull`: Cập nhật nhánh hiện tại với thay đổi mới nhất từ remote.
*   `git push`: Đẩy các commit từ local lên remote.
*   `git fetch`: Tải thay đổi từ remote nhưng không hợp nhất (merge).

### Làm việc với Nhánh (Branch)
*   `git branch`: Liệt kê các nhánh. Nhánh đang làm việc sẽ được đánh dấu `*` đằng trước.
*   `git checkout <ten-nhanh>`: Chuyển sang nhánh khác.
*   `git checkout -b <ten-nhanh-moi>`: Tạo và chuyển sang nhánh mới.
*   `git merge <ten-nhanh>`: Hợp nhất thay đổi từ một nhánh khác vào nhánh hiện tại.

### Xem lại Lịch sử và Thay đổi
*   `git status`: Kiểm tra trạng thái các tệp.
*   `git log`: Xem lịch sử commit (nhấn `q` để thoát).
*   `git log --oneline`: Xem lịch sử commit một cách ngắn gọn.
*   `git diff`: Xem các thay đổi chưa được `add`.
*   `git diff --staged`: Xem các thay đổi đã được `add`.

### Lưu Thay đổi (Commit)
*   `git add .`: Đưa tất cả thay đổi vào "staging area".
*   `git commit -m "Thông điệp"`: Ghi lại các thay đổi với một thông điệp (commit)
*   `git commit --amend`: Sửa lại commit gần nhất