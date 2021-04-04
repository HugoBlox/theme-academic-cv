---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Một cách học trên Leetcode hiệu quả"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-04-04T10:39:31+07:00
lastmod: 2021-04-04T10:39:31+07:00
featured: false
draft: false

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
# Focal points: Smart, Center, TopLeft, Top, TopRight, Left, Right, BottomLeft, Bottom, BottomRight.
image:
  caption: ""
  focal_point: ""
  preview_only: false

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects: []
---

# Mục tiêu
Nhiều người sử dụng Leetcode sai cách. Dưới đây là hướng dẫn từng bước hiệu quả
nhất để học tập trên Leetcode.
Điều quan trọng nhất là xác định việc bạn luyện tập để làm gì. Nhìn chung mục
tiêu chính của hầu hết mọi người trên Leetcode là cho các cuộc phỏng vấn kỹ thuật.

# Những điều không nên làm
* Đọc đề bài, nghĩ rằng mình biết đáp án và bắt tay vào code.
* Làm khoảng 30 bài một ngày trước buổi phỏng vấn.
* Không làm bài leetcode nào cả.

# Leetcode khác gì với phỏng vấn thực tế

## Những điểm chung giữa leetcode và phỏng vấn thật là:
* Các dạng đề bài
* Đáp án đầu tiên bạn đưa ra không phải là đáp án tốt nhất
* Phỏng vấn Online giống với làm trên Leetcode

## Những điểm khác nhau là:

* Buổi phỏng vấn bị giới hạn thời gian
* Nhà tuyển dụng không đưa ra mẫu code bắt đầu nào (khung solution)
* Nhà tuyển dụng không nói cho bạn phạm vi kiến thức của các đề bài
* Nhà tuyển dụng không nói cho bạn đề bài khó như nào
* Buổi phỏng vấn không có nút "Test" để bạn kiểm tra đáp án
* Nhà phỏng vấn yêu cầu bạn giải thích về đáp án, cách bạn giải quyết vấn đề

Còn rất nhiều điểm khác biệt nữa, vì thế để chuẩn bị cho buổi phỏng vấn bạn cần
phải luyện tập theo cách gần giống với phỏng vấn thật nhất.

# Ngôn ngữ lập trình nào tốt nhất

Không quan trọng bạn dùng ngôn ngữ nào, không có vấn đề gì nếu bạn sử dụng các ngôn ngữ sau:

* C++
* Java
* Python
* Javascript

> Chọn một ngôn ngữ bạn thành thạo nhất. Tuy nhiên hãy thực sự hiểu ngôn
> ngữ bạn sử dụng. Theo nguyên tắc chung, trước các cuộc phỏng vấn bạn cần lập
> trình hơn 1000 dòng các dự án lớn nhỏ bằng ngôn ngữ đó.

# Ôn tập cấu trúc dữ liệu

Bạn sẽ không học được nhiều từ Leetcode nếu bạn không hiểu cấu trúc dữ liệu.

Bạ đã từng tự mình triển khai từng cấu trúc dữ liệu này mà không có thư viện
chuẩn chưa?

Nếu chưa, hãy làm việc này trước! Việc này có ích hơn nhiều so với dành thời gian
trên Leetcode mà chưa biết về cấu trúc dữ liệu. Thêm đó, hãy chia sẻ kiến thức
của mình lên GitHub sau khi hoàn thành.
## Bảng phân loại

(Không dịch để giữ tính chính xác của thuật ngữ)

| Category             | Data Structures |
| --- | :--- |
| Linear               | Array <br/> Vector <br/> Linked List <br/> Circular Buffer |
| Restricted Linear    | Stack <br/> Queue<br/>Priority Queue |
| Heirarchial          | Trie<br/>Binary Search Tree (BST)<br/>Balanced BST |
| Containers           | Unordered Set<br/>Unordered Map (Dictionary) |
| *Group Name Pending* | Graphs<br/>Heap             


Với mỗi cấu trúc dữ liệu trên, hãy nắm được cách xử lý dữ liệu theo bảng sau.
Một vài phương thức có thể không áp dụng được cho một số cấu trúc dữ liệu nhất định:

## Bảng phương thức

(Không dịch để giữ tính chính xác của thuật ngữ)

| | Insert<br/>*Index<br/>*Front<br/>*Back | Remove <br/>*Index<br/>*Front<br/>*Back | Access <br/>*Index<br/>*Front<br/>*Back| Find By Value | 
| --- | --- | --- | --- | --- |
| Array |
| Vector |
| Linked List |
| Circular Buffer |
| |
| Stack |
| Queue |
| Priority Queue |
| |
| Trie |
| Binary Search Tree (BST) |
| Balanced BST |
| |
| Unordered Set |
| Unordered Map |
| |
| Graph |
| Heap |

## Bảng thuộc tính (Điền vào Y/N trừ khi có khả năng khác)

(Không dịch để giữ tính chính xác của thuật ngữ)

| | Sorted? | Indexable? | Insert Order Preserved | Memory Overhead (Big O) |
| --- | --- | --- | --- | --- |
| Array |
| Vector |
| Linked List |
| Circular Buffer |
| |
| Stack |
| Queue |
| Priority Queue |
| |
| Trie |
| Binary Search Tree (BST) |
| Balanced BST |
| |
| Unordered Set |
| Unordered Map |
| |
| Graph |
| Heap |

# Cách thức chung
> Thực hành mỗi ngày với 2 bài một ngày. Một vào buổi sáng, một vào buổi tối.

Đừng đặt mực tiêu trở nên pro chỉ sau một tháng. Hãy cho bản thân 6 tháng, bạn
sẽ hoàn thành 360 bài tập.

> Đặt hẹn giờ mỗi phiên 40 phút

Nếu bạn không giải được đề bài trong khoảng thời gian trên hãy dừng lại, xem qua
đáp án và cố gắng hiểu nó. Sau đó cố gắng code lại mà không nhìn và đáp án.
Nếu bạn hoành thành trước thời gian, hãy cố gắng thử xem có cải tiến thêm được
không? Cách triển khai? Thời gian thực thi? Bộ nhớ sử dụng? Nếu không còn gì để cải tiến
hãy viết comment trong code sao lý do tại sao?

> Ít nhất 2 lần một tuần, cố gắng không nhấn nút chạy thử.

Một vài công ty không cung cấp trình biên dịch compiler, bạn chỉ có trình soạn thảo code.
Nếu bạn có bảng trắng hãy viết lên đó.

> Yêu cầu sự giúp đỡ

Nếu bạn đọc đáp án mà không hiểu, hãy thử hỏi bạn bè, thầy cô giải thích cho bạn.
Ngược lại, việc giải thích cho người khác giúp bạn thực hành kỹ năng thuyết trình
đáp án trong buổi phỏng vấn. Điều này rất có ích cho bạn.

# Chia nhỏ thời gian cho mỗi bài tập
Lưu ý: các phần sau đây được triển khai trong điều kiện của buổi phỏng vấn.

| Time | Section | Goal |
|--- |--- | --- |
| 0:00 | 2 min | Hiểu đề bài |
| 0:02 | 1 min | Viết ra fuction signature [1] |
| 0:03 | 5 min | Xác nhận sự hiểu biết đề bài bằng cách đưa ra một vài trường hợp thử nghiệm và xem kết quả. Bãn có thể sẽ thấy khuôn mẫu củ vấn đề|
| 0:08 | 5 min | Thử nói ra giải pháp, hoặc viết mã psuedocode, Nếu không có giải pháp nào hãy dùng thời gian này nói lên suy nghĩ của bạn về các trường hợp thử nghiệm ở trên. |
| 0:13 | 5 - 17 mins | Đối với những câu hỏi dễ, bạn có thể triển khai solution ngay. Thông thường trong buổi phỏng vấn thực thế, đối với câu dễ, người phỏng vấn sẽ hỏi tiếp câu khó và bạn sẽ quay về mốc 0:00 ở trên. |
| 0:30 | 5 mins | Kiểm tra solution với các trường hợp đưa ra ở trên, và hoàn thiện các lỗi khác. |
| 0:35 | 4 mins | Lên tiếng xác nhận đáp án của bạn. Bạn có thể cải tiến nó thêm không? Bạn thấy tối ưu chưa? Có trường hợp input nào sai không? |
| 0:39 | 1 min | Chúc mừng bạn hoàn thành công việc và nghỉ ngơi xíu. |
| 0:40 | 20 mins | Tham khảo đáp án trên leetcode. Bạn có hiểu nó không? Thời gian chạy  - O(runtime) có khác không? Xem xét O(memory). Họ sử dụng cấu trú dữ liệu nào? Bạn có bỏ sót trường hợp hi hữu nào không? Có thông tin quan trọng nào bạn bỏ qua không? |

Lưu ý rằng ở phút 40 của mỗi phiên bạn nên dừng lại việc tìm đáp án. Nó giúp Leetcode không như một việc làm vô tận. Sau một giờ bạn nên hoàn thành buổi học đó.

[1] Function signature: bao gồm tên hàm, tham số truyền vào và kiểu trả về.


