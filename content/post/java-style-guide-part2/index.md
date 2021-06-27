---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Hướng dẫn lập trình Java theo tiêu chuẩn Google - Phần 2"
subtitle: ""
summary: ""
authors: []
tags: [java, cleancode]
categories: []
date: 2021-06-27T17:10:04+07:00
lastmod: 2021-06-27T17:10:04+07:00
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
>
> Phần 1: [Hướng dẫn lập trình Java theo tiêu chuẩn Google - Phần 1](/post/java-style-guide-part1/)

> Việc định dạng cấu trúc code giờ đây có thể được hoành thành bởi tính năng "format document" có sẵn trong các Editor, IDE. Tuy nhiên việc nắm vững các quy chuẩn viết code, ở đây là chuẩn Google Java giúp nâng cao kỹ năng lập trình của bạn lên một cấp độ mới. Cách thức trình bày code tốt cho thấy sự chuyên của lập trình viên, nó cũng gây ấn tượng tốt với nhà tuyển dụng.
>
> Trong quá trình dịch sẽ không tránh khỏi sai sót, vì vậy rất mong các bạn tiếp cận bài viết gốc được dẫn link ở trên để có được nội dung chính xác nhất. Nếu trong quá trình tìm hiểu, nếu có phần nội dung nào bạn đã sử dụng thành thục, bạn nên bỏ qua vì nó đã chuyển thành kỹ năng của bạn rồi.


# 5 Đặt tên
## 5.1 Quy tắc định danh chung
Định danh chỉ sử dụng số và chữ cái ASCII, một vài trường hợp sử dụng thêm dấu gạch dưới. Nó tương đương với biểu thức chính quy `\w+`
Trong Google Style các tiền tố hậu tố đặc biệt không được sử dụng. Ví dụ như các tên sau không tuân thủ Google Style: `name_`, `mName`, `s_name` and `kName`

## 5.2 Quy tắc theo loại định danh

### 5.2.1 Tên package
Tên package đều là chữ viết thường, với các từ được nối liên tục nhau (không chèn dấu gạch dưới). 
Ví dụ: `com.example.deepspace` không được `com.example.deepSpace`, `com.example.deep_space`.

### 5.2.2 Tên class
Tên class được viết theo chuẩn [UpperCamelCase](https://google.github.io/styleguide/javaguide.html#s5.3-camel-case)
Tên class thường là danh từ hoặc cụm danh từ. Ví dụ: `Character` or `ImmutableList`
Tên interface cũng có thể là danh từ hoặc cụm danh từ (ví dụ `List`). Nhưng đôi khi là tính từ hoặc cụm tính từ (ví dụ `Readable`)
Không có quy tắc hay quy ước cụ thể để đặt tên đúng chuẩn cho dấu Annotation.
Các test class được đặt tên bắt đầu bằng tên của class chúng test và kết thúc bởi Test. Ví dụ: `HashTest`, `HashIntegrationTest`.

### 5.2.3 Tên method
Tên method được viết theo chuẩn [lowerCamelCase](https://google.github.io/styleguide/javaguide.html#s5.3-camel-case)
Tên method thường là động từ hoặc cụm động từ. Ví dụ: `sendMessage`, `stop`.
Dấu gạch dưới có thể xuất hiện trong tên phương thức JUnit test để tách các phần logic riêng biệt của tên, và mỗi phần được đinh dạng lowerCamelCase. Một mẫu tên điển hình là `<methodUnderTest>_<state>`, ví dụ `pop_emptyStack`.

### 5.2.4 Tên constant
CONSTANT_CASE: Tất cả ký tự viết hoa, mỗi từ cách nhau một dấu gạch dưới.
Hằng số là trường **final static**, có giá trị không thay đổi, các phương thức không có khả năng làm thay đổi giá trị của hằng số. Nó bao gồm các kiểu nguyên thuỷ (primitives), String, các kiểu bất biến (immutable type), và danh sách các kiểu bất biến.

Ví dụ: Các tên sau thường là danh từ hoặc cụm danh từ.
```java
// Các khai báo hằng số
static final int NUMBER = 5;
static final ImmutableList<String> NAMES = ImmutableList.of("Ed", "Ann");
static final ImmutableMap<String, Integer> AGES = ImmutableMap.of("Ed", 35, "Ann", 32);
static final Joiner COMMA_JOINER = Joiner.on(','); // Joiner là kiểu bất biến (immutable)
static final SomeMutableType[] EMPTY_ARRAY = {};
enum SomeEnum { ENUM_CONSTANT }

// Không phải là hằng số
static String nonFinal = "non-final";
final String nonStatic = "non-static";
static final Set<String> mutableCollection = new HashSet<String>();
static final ImmutableSet<SomeMutableType> mutableElements = ImmutableSet.of(mutable);
static final ImmutableMap<String, SomeMutableType> mutableValues =
    ImmutableMap.of("Ed", mutableInstance, "Ann", mutableInstance2);
static final Logger logger = Logger.getLogger(MyClass.getName());
static final String[] nonEmptyArray = {"these", "can", "change"};
```
### 5.2.5 Tên trường
Các tên của trường non-constant được viết theo chuẩn lowerCamelCase
Các tên này thường là danh từ, cụm danh từ. Ví dụ: `computedValue`, `index`.
```java
private int computedValue;
private static long index;
```

### 5.2.6 Tên tham số
Tên tham số viết theo định dạng lowerCamelCase.
Tránh đặt tên tham số 1 ký tự trong phương thức public.
```java
public boolean isPrimeNumber(long n) {
	// vi phạm quy tắc đặt tên tham số 1 kí tự
}
```

### 5.2.7 Tên biến cục bộ
Tên biến cục bộ viết theo chuẩn lowerCamelCase.
```java
public boolean isPrimeNumber(long number) {
	var checkPrimeNumber = true;
	// ...
}
```
Các biến cục bộ không được xem là hằng số nên không được viết theo định dạng Constant.

### 5.2.8 Tên biến tham chiếu
Được đặt tên theo một trong 2 cách sau:
- Một chữ cái viết hoa, thường theo sau bởi chữ số (`E`, `T`, `X`, `T2`).
- Một tên viết theo quy tắc cho Class và theo sau là chữ cái viết hoa (`RequestT`).

## 5.3 Chuẩn Camel: định nghĩa
Có nhiều cách để chuyển một cụm từ tiếng anh thành định dạng **Camel**, vài ví dụ điển hình như IPv6, iOS. Để cải thiện khả năng dự đoán, Google Style đưa ra cách xác định như sau:
1. Chuyển cụm từ thành ký tự ASCII thuần tuý, lại bỏ các dấy nháy. Ví dụ "Müller's algorithm" trở thành "Muellers algorithm".
2. Chia nó thành các từ, loại bỏ khoảng thắng và dấu câu, thường là dấu gạch ngang.
3. Viết thường mọi từ, sau đó viết hoa ký tự đầu tiền của:
	- Tất cả các từ để được định dạnh UpperCamelCase.
	- Tất cả các từ ngoại trừ từ đầu tiên để được lowerCamelCase.

|Prose form|Correct|Incorrect|
| ----------- | ----------- | ---- |
|"XML HTTP request"|`XmlHttpRequest`|XMLHTTPRequest|
|"new customer ID"|`newCustomerId`|newCustomerID|
|"inner stopwatch"|`innerStopwatch`|innerStopWatch|
|"supports IPv6 on iOS?"|`supportsIpv6OnIos`|supportsIPv6OnIOS|
# 6 Thực hành lập trình
## 6.1 @Override: luôn được dùng
Một phương thức được đánh dấu với `@Override` bất cứ khi nào nó hợp lệ. Bao gồm phương thức ghi đè class cha, phương thức implement từ interface. Ví dụ phương thức `String toString()` từ Object:
```java
@Override
public String toString() {
	return "Luôn đánh dấu @Override khi ghi đè hoặc implement phương thức"
}
```
## 6.2 Bắt ngoại lệ: không được bỏ qua
Bạn đọc tham khảo [tại đây](https://google.github.io/styleguide/javaguide.html#s6.2-caught-exceptions)

## 6.3 Các thành phân static: tham chiếu theo class
Khi một tham chiếu đến một thành phần static, tham chiếu theo class của nó, không tham chiếu theo instance của class (object).
Ta có class Car, có trường `static numberOfCar`:
```java
class Car {
	private String name;
	private int yearPublish;
	private static int numberOfCar;
}
	Car (String name, int year) {
		this.name = name;
		this.yearPublish = year;
		numberOfCar++;
	}
```

```java
Car newCar = ...;
Car.numberOfcar; // Cách này hợp lý
newCar.numberOfcar; // Không hợp lý dù dùng được
```
# 7 Javadoc
## 7.1 Định dạng
### 7.1.1 Mẫu chung
Định dạng cơ bản của khối Javadoc thường dùng như ví dụ sau:
```java
/**
 * Multiple lines of Javadoc text are written here,
 * wrapped normally...
 */
public int method(String p1) { ... }
```
Hoặc theo kiểu một dòng:
```java
/** An especially short bit of Javadoc. */
```
Mẫu cơ bản luôn được chấp nhận. Mẫu một dòng sẽ thay thế khi khối Javadoc vừa đúng một dòng, ngoại trừ có thêm tag `@return`.

### 7.1.2 Đoạn văn
Một dòng trống, nghĩa là dòng chỉ chứa dấu hoa thị `*` ở đầu dòng - được dùng giữa các đoạn văn. Mỗi đoạn bắt đầu bằng thẻ `<p>`.

### 7.1.3 Block tags
Thứ tự xuất hiện `@param`, `@return`, `@throws`, `@deprecated` và không để trống phần mô tả. 
## 7.2 Đoạn tóm tắt
Mỗi Javadoc được bắt đầu bằng đoạn tóm tắt. Đoạn này rất quan trọng, nó là phần duy nhất xuất hiện tại các class, method.

## 7.3 Javadoc được sử dụng ở đâu
Nó xuất hiện tại các public class, các thành phần của khác của class, với một vài ngoại lệ dưới đầy.

## 7.3.1 Ngoài trừ: các method đơn giản
Javadoc tuỳ ý cho các loại phương thức đơn giản như getter, setter.

### 7.3.2 Ngoại trừ: overides
Không cần thiết cho các method ghi đè từ class cha hay interface.