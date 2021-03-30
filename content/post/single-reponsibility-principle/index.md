---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Nguyên tắc Nhiệm Vụ Đơn Lẻ"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2021-03-30T18:16:22+07:00
lastmod: 2021-03-30T18:16:22+07:00
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

>Bài viết gốc: [The Single Responsibility Principle](https://blog.cleancoder.com/uncle-bob/2014/05/08/SingleReponsibilityPrinciple.html) by Robert C. Martin (Uncle Bob)

Vào năm 1972, David L. Parnas đã xuất bản một bài viết có tựa đề On the Criteria To Be Used in Decomposing Systems into Modules. Trong bài viết này, Parnas đã so sánh hai chiến lược khác nhau để chia nhỏ và tách logic trong một thuật toán đơn giản. Bài viết rất hấp dẫn và tôi rất mong bạn xem qua nó. Một phần kết luận của ông như sau:

>Chúng tôi đã cố gắng chứng minh bằng những ví dụ này rằng hầu như luôn luôn sai khi bắt đầu phân chia hệ thống >thành các mô-đun trên cơ sở sơ đồ (flowchart). Thay vào đó, chúng tôi đề xuất bắt đầu bằng một danh sách các >quyết định thiết kế khó khăn hoặc các quyết định thiết kế có khả năng thay đổi. Mỗi mô-đun sau đó được thiết kế >để ẩn một quyết định như vậy với các mô-đun khác.

Tôi đã thêm phần nhấn mạnh trong câu thứ hai đến câu cuối cùng. Kết luận của Parnas là các mô-đun nên được tách biệt, theo nhiệm vụ mà chúng đảm nhiệm.

>Hai năm sau, Edsger Dijkstra viết một bài báo kinh điển khác có tựa đề On the role of scientific thought ( tạm >dịch Về vai trò của tư tưởng khoa học). Trong đó ông đưa ra thuật ngữ: The Separation of Concerns (tạm dịch Sự >tách biệt của các mối quan tâm).

Những năm 1970 và 1980 là thời kỳ thịnh vượng cho các nguyên tắc của kiến ​​trúc phần mềm.  Structured Programming and Design là tiêu biểu hơn cả. Trong thời gian đó, khái niệm về Coupling and Cohesion đã được giới thiệu bởi Larry Constantine, và được củng cố thêm bởi Tom DeMarco, Meilir Page-Jones và nhiều người khác.

Vào cuối những năm 1990, tôi đã cố gắng củng cố những quan niệm này thành một nguyên tắc, mà tôi gọi là: The Single Responsibility Principle (tạm dịch Nguyên tắc nhiệm vụ đơn lẻ) .(Tôi có cảm giác ngờ ngợ rằng tôi đã đánh cắp tên của nguyên tắc này từ Bertrand Meyer, nhưng tôi không thể xác nhận điều đó.)

Nguyên tắc Nhiệm vụ Đơn lẻ (SRP) nêu rõ rằng mỗi mô-đun phần mềm nên có một và chỉ một lý do để thay đổi. Điều này nghe có vẻ hay và phù hợp với công thức của Parnas. Tuy nhiên nó đặt ra câu hỏi: Điều gì xác định lý do để thay đổi?

Một số người đã tự hỏi liệu một bản vá lỗi có đủ điều kiện làm lý do để thay đổi. Những người khác đã tự hỏi việc tái cấu trúc có phải là lý do để thay đổi hay không. Những câu hỏi này có thể được trả lời bằng cách chỉ ra sự kết hợp giữa thuật ngữ “lý do để thay đổi” và “nhiệm vụ”.

Chắc chắn code không chịu trách nhiệm sửa lỗi, tái cấu trúc. Những điều đó là nhiệm vụ của lập trình viên, không phải của chương trình.

Nhưng nếu đúng như vậy thì chương trình phải chịu trách nhiệm gì? Hoặc có lẽ, một câu hỏi hay hơn là: Chương trình chịu trách nhiệm cho ai? Hay hơn nữa: Thiết kế của chương trình phản hồi cho ai?

Hãy tưởng tượng về một tổ chức doanh nghiệp điển hình. CEO (giám đốc điều hành) là người đứng đầu. Báo cáo lên vị CEO này là các giám đốc điều hành cấp C: họ là CFO (giám đốc tài chính), COO (giám đốc phụ trách điều hành) và CTO (giám đốc công nghệ). CFO chịu trách nhiệm giám sát tài chính của công ty. COO chịu trách nhiệm quản lý các hoạt động của công ty. Và CTO chịu trách nhiệm về cơ sở hạ tầng và phát triển công nghệ trong công ty.

Bây giờ hẫy xem xét Java code sau:
``` java
public class Employee {
  public Money calculatePay();
  public void save();
  public String reportHours();
}
```

* Phương thức calculatePay() triển khai các thuật toán xác định bao nhiêu nhân viên cụ thể sẽ được thanh toán, dựa trên hợp đồng, trạng thái, số giờ làm việc, ...
* Phương thức save() lưu trữ dữ liệu được quản lý bởi Employee object vào cơ sở dữ liệu doanh nghiệp.
* Phương thức reportHours() trả về một chuỗi, chuỗi này được dùng trong báo cáo mà kiểm toán viên sử dụng để đảm bảo nhân viên đang làm việc trong số giờ thích hợp và được trả lương thích hợp.

Bây giờ, giám đốc điều hành cấp độ C nào chịu trách nhiệm cho các hành vi của phương thức calculatePay()? Ai trong số họ sẽ bị sa thải[1] nếu phương thức đó thực hiện các hành vi sai nghiêm trọng? Rõ ràng câu trả lời là CFO. Nếu tất cả các nhân viên được trả lương gấp đôi trong một năm vì ai đó trong bộ phận quản lý tài chính quy định sai các quy tắc tính lương, giám đốc tài chính có thể bị sa thải.

Một giám đốc khác chịu trách nhiệm chỉ định định dạng và nội dung của chuỗi trả về từ phương thức reportHours(). Vị giám đốc đó quản lý các kiểm soát viên. Vì vậy nếu có sai sót nghiêm trọng trong báo cáo, COO sẽ bị sa thải.

Và cuối cùng tương tự là CTO sẽ chịu trách nhiệm trong sai sót liên quan đến dữ liệu doanh nghiệp.

Và đây là điểm mấu chốt của nguyên tắc Nhiệm Vụ Đơn Lẻ. Nguyên tắc này là về con người.

Khi bạn viết một mô-đun phần mềm, bạn muốn đảm bảo rằng khi các thay đổi được yêu cầu, những thay đổi chỉ có thể bắt nguồi từ một người duy nhất, hay đúng hơn, một nhóm người kiên kết chặt chẽ đại diện cho một chức năng doanh nghiệp được xác định rõ ràng. Bạn muốn tách biệt mô-đun của mình khỏi sự phức tạp của tổ chức nói chung, và thiết kế hệ thống của bạn sao cho mỗi mô-đun chịu trách nhiệm (đáp ứng) các yêu cầu chỉ cho chức năng nghiệp vụ đó.

Tại sao? Bởi vì chúng tôi không muốn COO bị sa thải vì chúng tôi đã thực hiện thay đổi do CTO yêu cầu.

Không gì làm khách hàng và quản lý của chúng tôi kinh hoảng hơn khi phát hiện chương trình bị trục trặc theo cách, mà theo quan điểm của họ là hoàn toàn không liên quan đến những thay đổi mà họ yêu cầu. Nếu bạn thay đổi phương thức calculatePay() và vô tình làm hỏng phương thức reportHours(), thì COO sẽ bắt đầu yêu cầu bạn không bao giờ thay đổi phương thức calculatePay() thêm lần nào nữa.

Thử tưởng tượng bạn mang xe đến thợ cơ khí để sửa cửa sổ điện bị hỏng. Anh ấy gọi bạn vào ngày hôm sau và bảo mọi thứ đã được khắc phục. Khi bạn nhận xe, cửa sổ hoạt động tốt nhưng xe không nổ máy. Thật khó để bạn quay lại với người thợ đó với những gì anh ta đã làm.

Đó là cảm nhận của khách hàng và quản lý khi chúng tôi làm hỏng những thứ họ quan tâm mà họ đã không yêu cầu chúng tôi thay đổi.

Đây là lý do chúng tôi không đưa SQL vào JSPs. Đây là lý do chúng tôi không viết mã HTML trong các mô-đun tính toán kết quả. Đây là lý do mà các quy tắc nghiệp vụ không nên biết về cấu trúc database. Đây là lý do chúng tôi tách biệt các mối quan tâm.

Một cách diễn đạt khác cho nguyên tắc Nhiệm Vụ Đơn Lẻ:
>Tập hợp lại những điều thay đổi vì những lý do giống nhau. Tách những thứ thay đổi vì lý do khác nhau.

Nếu bạn nghĩ về điều này, bạn sẽ nhận ra rằng đây chỉ là một cách khác để xác định sự gắn kết và khớp nối. Chúng tôi muốn tăng sự gắn kết giữa những thứ thay đổi vì những lý do giống nhau và giảm sự gắn kết giữ những thứ thay đổi vì lý do khác nhau.

Tuy nhiên khi bạn nghĩ về nguyên tắc này, hãy nhớ rằng lý do thay đổi là do con người. Đó là những người yêu cầu thay đổi.Và bạn không muốn gây nhầm lẫn cho những người đó hoặc chính mình bằng cách trộn lẫn code mà nhiều khác quan tâm vì những lý do khác nhau.

[1] Tôi thích một chút cường điệu ở đây. Các giám đốc điều hành cấp C thường không bị sa thải vì các thông số kỹ thuật sai nhỏ. Tuy nhiên, nó không nằm ngoài khả năng xảy ra và nó nhấn mạnh rằng các tổ chức báo cáo với các giám đốc điều hành này quan tâm đến các mối quan tâm khác nhau.