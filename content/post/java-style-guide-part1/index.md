---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Hướng dẫn lập trình Java theo tiêu chuẩn Google - Phần 1"
subtitle: ""
summary: ""
authors: []
tags: [java, cleancode]
categories: []
date: 2021-03-19T13:08:08+07:00
lastmod: 2021-06-26T13:08:08+07:00
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

> Bài viết gốc: [Google Java Style Guide](https://google.github.io/styleguide/javaguide.html)

> Việc định dạng cấu trúc code giờ đây có thể được hoành thành bởi tính năng "format document" có sẵn trong các Editor, IDE. Tuy nhiên việc nắm vững các quy chuẩn viết code, ở đây là chuẩn Google Java giúp nâng cao kỹ năng lập trình của bạn lên một cấp độ mới. Cách thức trình bày code tốt cho thấy sự chuyên của lập trình viên, nó cũng gây ấn tượng tốt với nhà tuyển dụng.
>
> Trong quá trình dịch sẽ không tránh khỏi sai sót, vì vậy rất mong các bạn tiếp cận bài viết gốc được dẫn link ở trên để có được nội dung chính xác nhất. Nếu trong quá trình tìm hiểu, nếu có phần nội dung nào bạn đã sử dụng thành thục, bạn nên bỏ qua vì nó đã chuyển thành kỹ năng của bạn rồi.

# 1. Giới thiệu

Tài liệu này đóng vai trò là định nghĩa hoàn chỉnh "tiêu chuẩn viết code Google" đối với ngôn ngữ lập trình Java. Tệp mã nguồn được gọi là "Google Style" nếu nó tuần thủ các quy tắc sau đây.

Giống với các hướng dẫn viết code ở những ngôn ngữ khác, các vấn đề được đề cập không chỉ là tính thẩm mỹ trong trình bày code mà còn là các quy chuẩn, quy ước viết code khác. Tuy nhiên, tài liệu này chủ yếu tập trung vào các quy tắc nhanh chóng mà chúng tôi tuân theo trên toàn cầu, và tránh đưa ra những lời khuyên không thể thực thi rõ ràng (kể cả con người và công cụ).

## 1.1 Ghi chú thuật ngữ

Trong tài liệu này, trừ khi được làm rõ:

1. Thuật ngữ class là chỉ class thông thường, enum class, interface hoặc kiểu đánh dấu (annotation type).

2. Thuật ngữ member (của một class) được sử dụng để chỉ class lồng nhau, trường (field), phương thức (method), hàm dựng (constructor). Nghĩa là tất cả các thành phần cấp cao nhất của một class ngoại trừ trình khởi tạo (khai báo và khởi tạo biến) và nhận xét (initializers and comments).

3. Thuật ngữ comment luôn đề cập đến bình luận triển khai (implementation comment - tức diễn giải cách bạn thực thi các hàm, code). Chúng tôi không sử dụng cụm từ nhận xét tài liệu (documentation comments), thay vào đó sử dụng thuật ngữ Javadocs.

Các ghi chú thuật ngữ khác thỉnh thoảng sẽ xuất hiện trong suốt tài liệu.

## 1.2 Ghi chú hướng dẫn

Các ví dụ trong tài liệu này là **non-normative () //todo**

# 2. Các cơ bản về tệp mã nguồn**

## 2.1 Tên tệp

Tên tệp trùng với tên class cao nhất mà tệp chứa, có phân biệt chữ hoa và chữ thường kết thúc bằng đuôi mở rộng `.java`

## 2.2 Mã hóa tệp UTF-8

Các tệp mã nguồn được mã hóa bằng **UTF-8**.

# 3. Cấu trúc tệp mã nguồn

Một tệp mã nguồn theo thứ tự bao gồm:

1. Giấy phép, thông tin bản quyền nếu có.

2. Câu lệnh package.

3. Câu lệnh import.

4. Một lớp cấp cao nhất.

Một dòng trống để phân tách các thành phần trên.

## 3.1 Giấy phép, thông tin bản quyền nếu có.

Nếu giấy phép hoặc thông tin bản quyền thuộc về một tệp, nó sẽ gi rõ ở đây.

## 3.2 Câu lệnh package

Câu lệnh package không được xuống dòng. Giới hạn số cột (100 ký tự **ASCII**) không áp dụng cho câu lệnh package.

## 3.3 Câu lệnh import

### 3.3.1 Không import đại diện (wildcard import - import tắt)

**Import** đại diện, tĩnh hoặc cách khác không được sử dụng.

### 3.3.2 Không xuống dòng

Câu lệnh `import` không được xuống dòng. Giới hạn số cột (100 ký tự ASCII) không áp dụng cho câu lệnh import.

### 3.3.3 Thứ tự và khoảng cách

Imports được sắp xếp như sau:
1. Tất cả các `static imports` trong một khối duy nhất.
2. Tất cả các `non-static imports` trong một khối duy nhất.

Nếu có cả hai, phân tách chúng bằng một dòng trống. Giữa các câu lệnh import không được có dòng trống.

Trong mỗi khối, các tên được import sắp xếp theo thứ tự ký tự **ASCII**.

### 3.3.4 Không import tĩnh (static import) cho class

Static import không được sử dụng cho các class lồng nhau tĩnh (static nested class). Chúng được import với các import thông thường.

## 3.4 Khai báo class

### 3.4.1 Khai báo chính xác một class cấp cao nhất

Mỗi class cấp cao nhất nằm trong mỗi tệp mã nguồn của riêng nó.

### 3.4.2 Thứ tự sắp xếp các nội dung trong class

Thứ tự bạn chọn cho các thành phần (members), các trình khởi tạo (initializers) của class có ảnh hưởng lớn đến khả năng đọc hiểu code. Tuy nhiên không có công thức duy nhất để làm việc này. Các class khác nhau có thể sắp xếp các thành phần theo cách khác nhau.

Điều quan trọng là mỗi class sử dụng một số thứ tự logic mà người bảo trì (maintainer) của nó có thể giải thích nếu được hỏi đến. Ví dụ: các phương thức mới thường được thêm vào cuối class, đây là thứ tự theo thời gian mở rộng class chứ không phải thứ tự logic.

#### 3.4.2.1 Nạp chồng: không chia tách

Khi class có nhiều hàm dựng (constructor), nhiều phương thức (method) với tên giống nhau, chúng được sắp xếp gần nhau, không có thành phần nào xen vào giữa.

# 4. Định dạng

Lưu ý thuật ngữ: cấu trúc dạng khối (block-like construct) là toàn bộ cấu trúc hoàn chỉnh của một class, phương thức (method), hàm dụng (constructor). Lưu ý rằng: bất kỳ bộ khởi tạo mạng nào cũng có thể tùy chọn xử lý như thể nó là một cấu trúc dạng khối.

## 4.1 Dấu ngoặc nhọn

### 4.1.1 Dấu ngoặc nhọn được sử dụng khi tùy chọn

Dấu ngoặc nhọn được sử dụng trong các câu lệnh if, else, for, do và while. Kể cả khi phần thân rỗng hoặc chỉ chứ duy nhất một câu lệnh.

### 4.1.2 Các khối chứa nội dung: phong cách K & R

Dấu ngoặc nhọn theo phong cách K & R (Kernighan and Ritchie style) khối có nội dung và các dạng khối.

- Không xuống dòng trước dấy mở ngoặc ( { ).
- Xuống dòng ngay sau dấy mở ngoặc ( { ).
- Xuông dòng trước dấu đóng ngoặc ( } ).
- Xuống dòng ngay sau dấu ngoặc nhọn đóng ( } ), chỉ khi đấu ngoặc nhọn đó kết thúc một câu lệnh hoặc kết thúc phần thân của một phương thức. Ví dụ không ngắt dòng sau dấu ngoặc nhọn nếu sau nó là else hoặc dấu chấm phẩy
Ví dụ:
```java
return () -> {
  while (condition()) {
    method();
  }
};

return new MyClass() {
  @Override public void method() {
    if (condition()) {
      try {
        something();
      } catch (ProblemException e) {
        recover();
      }
    } else if (otherCondition()) {
      somethingElse();
    } else {
      lastThing();
    }
  }
};
```

### 4.1.3 Các khối rỗng: có thể làm ngắn gọn

Một khối rỗng hoặc cấu trúc dạng khối có thể theo phong cách K & R. Ngoài ra nó có thể đóng ngoặc liền sau dấu mở ngoặc, không có ký tự hay ngắt dòng ở giữa ( {} ).
```java
  // This is acceptable
  void doNothing() {}

  // This is equally acceptable
  void doNothingElse() {
  }
```
```java
  // This is not acceptable: No concise empty blocks in a multi-block statement
  try {
    doSomething();
  } catch (Exception e) {}
```

## 4.2 Thụt lể một khối: +2 khoảng trống.

Mỗi khi một khối hay cấu trúc dạng khối bắt đầu, thụ lề tăng 2 dấu cách. Khi một khối kết thúc, thục lề trở về bằng mức trước đó. Mưc thụt lề được áp dụng cả code mà comment.

## 4.3 Mỗi hàng một câu lệnh

Mỗi câu lệnh được theo sau bởi một dấu ngắt dòng.

## 4.4 Giới hạn số cột: 100

Java code có giới hạn cột là 100 ký tự. Một ký tự là một điểm mã Unicode bất kỳ. Ngoại từ vài lưu ý dưới đây: bất kỳ dòng nào vượt quá giới hạn này phải được bọc dòng (line-wrapped).

Mỗi điểm mã Unicode được tính là một ký tự, kể cả khi chiều  rộng của nó lớn hơn hay nhỏ hơn. Nếu sử dụng các ký tự fullwidth bạn có thế chọn xuống dòng sớm để tuân thử quy tắc này.

Các ngoại lệ:

- Các dòng  không tuân theo giới hạn cột (một URL dài trong Javadocs hoặc một tham chiếu phương thức JSNI dài).
- Câu lệnh package hoặc import.
- Các dòng lệnh trong phần comment có thể được cut-and-pasted để chạy.

## 4.5 Xuống dòng

Ghi chú thuật ngữ: Khi code trên một dòng được chia thành nhiều dòng, hành động này được gọi là line-wrapping.

Không có công thức xác định toàn diện nào chỉ ra chính xác cách xuống hàng trong các trường hợp. Thông thường có một số cách hợp lệ sau.

Note: Mặc dù lý do điển hình cho việc xuống dòng là để tránh vượt quá giới hạn cột, nhưng trong thực tế mặc dù code nằm trong giới hạn quy định cũng có thể được xuống dòng theo quy định của tác giả.

Tip: Việc trích xuất một phương thức, một biến cục bộ có thể giải quyết  vấn đề mà không phải xuống dòng.

### 4.5.1 Ngắt dòng ở đâu

Nhận biết chính của ngắt dòng là: ưu tiên ngắt dòng ở cấp độ cú pháp cao hơn.

1. Một dòng được ngắt tại toán tử non-assignment*, *ngắt dòng ngay trước ký tự.

- Điều này cũng áp dụng cho cho các ký hiệu giống toán tử sau:
	- Dấu chấm phân cách (.)
	- Hai dấu hai chấm của một tham chiếu hàm ( :: )
	- Một dấu và (&) trong ràng buộc kiểu (type)(`catch(FooException|BarException e)`).
	- Một dấu gạch dọc ( | ) trong khối catch (`catch(FooException|BarException e)`)

2.  Khi môt dòng bị ngắt tại toán tử assignment, ngắt dòng ngay sau ký hiệu. Nhưng một trong hai cách đều có thể chấp nhận được.
	- Điều này cũng áp dụng dạng toán tử gán trong câu lệnh for nâng cao (foreach).

3. Một tên phương thức hoặc tên hàm dụng vẫn được gán vào đấu ngoặc đơn mở ngay sau nó.
4. A comma (`,`) stays attached to the token that precedes it.
5. Một dòng không được ngắt cạnh mũi tên (->) trong lambda, ngoại trừ có thể ngắt dòng ngay sau mũi tên nếu phần thân cảu lambda bao gồm một biểu không có dấu.

```
MyLambda<String, Long, Object> lambda =
    (String label, Long value, Object obj) -> {
        ...
    };

Predicate<String> predicate = str ->
    longExpressionInvolving(str);
```
**Note**: mục đích chính của việc xuống dòng là trình bày code rõ rãng, dễ đọc. Không nhất thiết để tuân thủ quy định giới hạn cột 100 ký tư.

### 4.5.2 Thụt lề các dòng liên tiếp ít nhất +4 dấu cách

Khi ngắt dòng, mỗi dòng sau dòng đầu tiên được thụt lề ít nhất +4 sao với dòng ban đầu.

Khi có nhiều dòng tiếp nối, thụt lề có thể thay đổi lớn hơn 4 theo mong muốn. Nói chung hai dòng liên tục sử dụng cùng một mức thụt lề nếu và chỉ khi chúng bằng đầu bằng các phần tử song song về mặt cú pháp.

## 4.6 Khoảng trắng

### 4.6.1 Khoảng trắng theo chiều dọc dọc

Một dòng trống thường xuất hiện:

1.  Giữa các thành phần và trình khởi tạo (members or initializers) liên tiếp của class: fields, constructors, methods, nested class, static initializers, and instance initializers.
Ngoại trừ:
	- Một dòng trống giữa 2 trường liên tiếp (không có đoạn code nào giữa chúng) là tùy chọn. Các dòng trống được sử dụng để gộp các nhóm thuộc tính hợp lý.
	- Các dòng trống giữa các hằng số enum.

2. Theo yêu cầu ở các phần khác  trong tài liệu này (such as Section 3, [Source file structure](https://google.github.io/styleguide/javaguide.html#s3-source-file-structure), and Section 3.3, [Import statements](https://google.github.io/styleguide/javaguide.html#s3.3-import-statements)).

Một dòng trống duy nhất có thể sử dụng bất cứ nơi đâu để giúp việc đọc code dễ hơn, ví dụ giữa các câu lệnh để chia code thành cac mục nhỏ hợp lý.

Nhiều dòng trống là đước phép, những không cần thiết hay được khuyến khích.

### 4.6.2 Khoảng trắng theo chiều ngang

Bên cạnh các yêu cầu từ ngôn ngữ hoặc từ quy tắc trình bày code khác, một khoản trống ASCII duy nhất chỉ xuất hiện ở những nơi sau.

1. Nơi ngăn cách các từ dành riêng `if`, `for`, `catch` khởi dấu ngoặc đơn mở ( ( ) theo sau từ đó ngay tại dòng đó.
2. Nơi ngăn cách các từ dành riêng `else`, `catch` với dấu ngoặc nhọn đóng ( } ) đứng trước nó tại dòng đó.
3. Trước bất kỳ dấu ngoặc nhọn mở ( { ) nào, với 2 ngoại lệ: 1.
	- `@SomeAnnotation({a, b})` (no space is used)
	- `String[][] x ={{"foo"}};` (no space is required between `{{`, by item 8 below)

4. Trên cả 2 mặt của bất kỳ toán tử nhị phân, toán tử bậc 3. Điều này cũng áp dụng cho các ký hiệu "giống toán tử" sau:
	- ký hiệu & trong kiểu ràng buộc `<T extendsFoo&Bar>`;

	- Dấy gạch dọc ( | ) trong khối catch bắt nhiều trường hợp ngoại lệ `catch(FooException|BarException e)`

	- Dấu 2 chấm (:) trong câu lệnh for nâng cao (forteach)

	- dấu mũi tên trong biểu thức lambda
- Không áp cụng cho:
	- Hai dấu 2 chấm (::) của một phương thức tham chiếu
	- Dấu chấm ngăn cách (.)

5. Sau ,:; hoặc dấu ngoặc đơn đóng ( ) ) của một tập hợp

6. Trên cả hai mặt của dấu gạch chéo kép // khi bắt đầu nhận xét cuối dòng.

7. Giữa kiểu dữ liệu và tên biến của một khai báo biến.

8. Tùy chọn chỉ bên trong cả hai dấu ngoặc nhọn của trình khởi tạo mảng

Quy tắc này không bao giờ được hiểu là yêu cầu hoặc cấm thêm khoảng trắng ở đầu hoặc cuối dòng, nó chỉ giải quyết vấn đề tiết kiệm không gian để viết code .

### 4.6.3 Căn chỉnh theo chiều ngang: không cần thiết

Lưu ý thuật ngữ: Căn chỉnh theo chiều ngang (*Horizontal alignment*) là hành động thêm một vài khoảng trắng vào code với mục đích làm mã thông báo nhất định xuất hiện ngay bên dưới một số mã thông báo khác trên các dòng trước đó.

```java
private  int x;  // this is fine  
private  Color color;  // this too  
private  int x;  // permitted, but future edits  
private  Color color;  // may leave it unaligned

```

Hành động này là cho phép, nhưng không bắt buộc bởi Google Style. Thâm chí không cần duy trì căn chỉnh theo chiều ngang ở những nơi mà nó đã được sử dụng.

**Tip**: Căn chỉnh giúp việc đọc code dễ hơn, nhưng nó tọa ra các vấn đề cho việc bảo trì trong tương lai.

## 4.7 Phân nhóm các dấu ngoặc đơn: khuyến nghị

Dấu ngoặc đơn phân nhóm tùy chọn chỉ được bỏ qua khi tác giả và người đánh giá đồng ý rằng không có khả năng hợp lý mã sẽ bị hiểu sai nếu không có chúng, cũng như chúng sẽ làm cho mã dễ đọc hơn. Không hợp lý khi cho rằng mọi người đọc đều ghi nhớ toàn bộ bảng ưu tiên toán tử Java.

## 4.8 Các cấu trúc cụ thể

### 4.8.1 Các lớp Enum

Sau mỗi dấu phẩy theo sau một hằng số Enum, được tùy chọn ngắt dòng.
```java
private enum Answer {
  YES {
    @Override public String toString() {
      return "yes";
    }
  },

  NO,
  MAYBE
}
```

Một lớp enum không có phương thức và tài kiệu về các hàng số của nó có  thể tùy chọn định dạng như là khởi tạo mảng.
```java
private enum Suit { CLUBS, HEARTS, SPADES, DIAMONDS }
```

Vì enum là một class nên áp dụng các quy tắc của class.

### 4.8.2 Khai báo biến

#### 4.8.2.1 Một biến cho mỗi khai báo

Mọi khai báo biến (trường hoạc cục bộ) chỉ khai báo một biến (từng biến một, dù rằng chung kiểu dữ liệu). Không cho phép `int a, b;`.

Ngoại trừ nhiều khai báo biến được chấp nhận trong vòng lặp `for`

#### 4.8.2.2 Khai báo khi cần thiết

Các biến cục bộ không được khai báo theo thói quen đầu khối chứa chúng. Thay vào đó, chúng được khai báo gần với điểm chúng được sử dụng, để giảm thiểu phạm vi của nó.

### 4.8.3 Mảng

#### 4.8.3.1 Trình hởi tạo mảng: có thể là  dạng khối (block-like)

Bất kể khai báo khởi tạo mảng nào đều được định dạng như là một khối.
```java
new int[] {           new int[] {
  0, 1, 2, 3            0,
}                       1,
                        2,
new int[] {             3,
  0, 1,               }
  2, 3
}                     new int[]
                          {0, 1, 2, 3}
```

#### 4.8.3.2 Không khai báo mảng giống C (C-style)

Dấu ngoặc vuông tạo nên một phần của kiểu, không phải của biến.
Chấp nhận `String[] args`, không khai báo `String args[]`.

### 4.8.4 Câu lệnh switch

Lưu ý thuật ngữ: Bên trong dấu ngoặc nhọn của một khối switch (switch block) là một hoặc nhiều nhóm câu lệnh (statement groups). Mỗi nhóm câu lệnh bào gồm một hoặc nhiều nhãn chuyển đổi (switch labels) (either `case FOO:` or `default:`), theo sau là một hoặc nhiều câu lệnh.

#### 4.8.4.1 Thụt lề

Giống với các khối lệnh khác, nội dung của một nhánh sẽ được thụt lề +2.

Sau nhãn chuyển đổi (case), thực hiện xuống dòng và mức thụt lề được tăng lên +2. Các case tiếp theo quay lại mức thụt lề bằng với case trước đó.

#### 4.8.4.2 Fall-through: comment

#### 4.8.4.3 Trường hợp default

Mỗi câu lệnh switch bao gồm một nhóm câu lệnh trong nhánh `default`, kể cả khi nhóm đó không chứa câu lệnh nào.

Ngoại trừ: Câu lệnh switch cho kiểu enum có thể bỏ qua nhóm câu lệnh default, nếu nó bao gồm các trường hợp rõ ràng gồm tất cả cả giá trị có thể của loại đó. Dần đến IDE sẽ đưa ra cảnh báo nếu bỏ sót bất kỳ trường hợp nào.

### 4.8.5 Các đánh dấu (Annotations)

Các đánh dấu (annotations) cho một lớp (class), phương thức (method), hàm dựng (constructor) sẽ xuất hiện ngay sau khối tài liệu (documentation block) và mỗi đánh dấu sẽ được liệt kê trên một dòng của riêng nó (một annotation trên một dòng). Không áp dụng thụt lề đối với annotation. Ví dụ:
```java
@Override
@Nullable
public String getNameIfPresent() { ... }
```

**Ngoại trừ**: Annotation của hàm không cố tham số tuyền vào có thể xuất hiện cùng  dòng đầu tiên của method signature (signature của một hàm bao gồm tên hàm và tham số truyền vào), ví dụ:
```java
@Override public int hashCode() { ... }
```

Các annotation cho trường (field) cũng xuất hiện ngay sau khối tài liệu (documentation block), nhưng trong trường hợp này nhiều annotation cùng nhau được liệt kê trên cùng một dòng, ví dụ:

```java
@Partial @Mock DataLoader loader;
```

Không có quy tắc cụ thể nào để định dạng các annotation cho các tham số,  biến cục bộ và kiểu dữ liệu.

### 4.8.6 Các nhận xét (comments)

Phần này nhắm đến các bình luận triển khai (implementation comments).

### 4.8.6.1 Các kiểu khối comment

Các khối comment được thụt lề cùng cấp với code quanh nó. Có thể là dạng `/* ... */`, `// ....`, và các dòng tiếp theo phải bắt đầu bằng dấu * thẳng hành với dấy * ở dòng trươc do. /*

```java
 * This is          // And so           /* Or you can
 * okay.            // is this.          * even do this. */  */
```

Các bình luận không được đặt trong các hộp vẽ bằng dấu hoa thị hay ý tự khác.

**TIP**: Khi viết bình luận nhiều dòng, sử dụng kiểu `/* ... */` để bộ định dạng code tự động xuống dòng khi cần thiết (kiểu đoạn văn).

4.8.7  Modifiers

Các modifier nếu có được sắp xếp theo thứ tự theo quy định của ngôn ngữ Java

```java
public protected private abstract default static final transient volatile synchronized native strictfp

```

4.8.8 Numeric liter

các giá trị số nguyên lớn (`long`) được sử dụng hậu tố `L` (`3000000000L`), không bảo giờ viết thường (`3000000000l`) để tránh nhầm lẫn với số 1.

> Phần 2: [Hướng dẫn lập trình Java theo tiêu chuẩn Google - Phần 1](/post/java-style-guide-part2/)