---
# Documentation: https://wowchemy.com/docs/managing-content/

title: "Docker cho nhà phát triển Java - 5 điều cần làm để đảm tính bảo mật ứng dụng"
subtitle: ""
summary: ""
authors: []
tags: [docker, devops, java]
categories: []
date: 2021-08-25T18:55:25+07:00
lastmod: 2021-08-25T18:55:25+07:00
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

> Bài viết gốc: [Docker for Java developers: 5 things you need to know not to fail your security](https://snyk.io/blog/docker-for-java-developers/) by **Brian Vermeer**

Docker là cách được sử dụng rộng rãi nhất để đóng gói ứng dụng của bạn. Với Docker Hub rất dễ để tạo mới hoặc kéo về các image được tạo sẵn. Điều này rất tiên lợi vì bạn có thể dụng các image từ Docker Hub để nhanh chóng xây dựng lên ứng dụng của riêng bạn.

Tuy nhiên, việc tự tạo một Docker image tùy chỉnh cho ứng dụng Java đi kèm với các vấn đề bảo mật nếu bạn chưa có nhiều kinh nghiệm.Vậy là thế nào để chúng ta biến bảo mật là một phần thiết yếu của Docker cho các nhà phát triển Java?

Trước khi đi sâu vào cách để bạn tạo một Docker image cho ứng dụng Java. Hãy xem qua một vài câu hỏi thường gặp về chủ đề này.

## Làm thế nào để đóng gói ứng dụng Java?

Chạy ứng dụng Java trong một Docker container có thể được thực hiện đơn giản bằng việc sao chéo tệp `.jar` hoặc `.war` vào base image của **JRE** nhưng có vài điều cần lưu ý khi bạn làm điều đó. Chọn **JVM** phù hợp và phù hợp với cài đặt của container runtime mới là một nửa của cuộc chiến. Việc chọn base image nào bạn sẽ sử dụng là cực kỳ quan trọng từ quan điểm bảo mật vì khả năng dẫn đến lỗ hổng bảo mật nếu bạn chọn không tốt.

Bài viết này sẽ cho bạn thêm thông tin để hiểu rõ hơn về tác động của việc chọn base image và giúp bạn tìm được base image bảo mật nhất cho ứng dụng của bạn.

## Docker giúp ích như nào cho nhà phát triển Java?

Đóng giói ứng dụng Java của bạn vào container cho phép bạn xác định ứng dụng hoàn chỉnh của mình, bao gồm JRE, thiết lập cấu hình, các phụ thuộc cấp độ hệ điều hành. Các image này được xác định trong phần mền cho phép lặp lại toàn bộ quá trình tạo và cho nhà phát triển chạy cùng một nền tảng ở các môi trường khác nhau. Cuối cùng, container cho phép lập trình viên thử nghiệm dễ dàng hơn với các phát hành ứng dụng mới hoặc các thay đổi khác ngay trên máy của họ mà không cần các yêu cầu quyền đặc biệt.

## Lựa chọn đúng Docker base-image cho ứng dụng Java

Khi tạo một Docker image chúng tôi làm image này dựa trên image được lấy về từ Docker Hub. Đó là những gì chúng tôi gọi là base-image. Base-image này là nền tảng của image mới mà bạn chuẩn bị xây dựng. Base-image bạn chọn là cần thiết bởi vì nó cho phép bạn sử dụng mọi thứ sẵn có trong đó. Tuy nhiên điều này phải trả giá, bởi khi base-image chứa lỗ hổng bạn sẽ kế thừa lỗ hổng này ở image bạn sẽ tạo.

Nhìn vào base image, rất nhiều lỗ hổng bảo mật là một phần của lớp Hệ điều hành mà base image sử dụng. Trong nghiên cứu của chúng tôi đầu năm 2019, [Shifting Docker security left](https://snyk.io/blog/shifting-docker-security-left/), chúng tôi đã chỉ ra rằng các lỗ hổng bảo mật đến từ lớp OS có thể thay đổi phần lớn tùy thuộc vào bạn lựa chọn.

![base-image os](https://techmaster.vn/media/static/6009/c4ee0k451co2bih9uabg)

[2019 report – Shifting Docker security left](https://snyk.io/blog/shifting-docker-security-left/)

Hãy xem xét bộ các Docker base-image từ Adoptopenjdk, openjdk11. Sử dụng tag mặc định của họ, các image này được xây dựng dựa trên hệ điều hành Ubuntu. Tuy nhiên, chúng ta có các lựa chọn phiên bản cụ thể khác như dựa trên Debian, Centos hoặc Alpine (lưu ý rằng Alpine không dựa trên glibc bêb có thể không tương thích với các ứng dụng thực hiện cuộc gọi JNI gốc).!

![base-image jdk](https://techmaster.vn/media/static/6009/c4ee19451co2bih9uac0)

Chúng ta có thể kết luận rằng, việc chọn base-image phù hợp là rất quan trọng từ góc độ bảo mật. Bạn hoàn toàn có thể không cần tất cả các tệp nhị phân đi kèm từ một hệ điều hành đầy đủ. Tốt hơn nên xây dựng Docker image cho ứng dụng Java dựa trên base-image tối thiểu. Loại bỏ các tệp nhị phân không cần thiết - điều này sẽ không ảnh hưởng đến ứng dụng Java của bạn.

Bên cạnh vấn đề bảo mật, **một base-image tối thiểu sẽ làm giảm kích thước image bạn sẽ tạo ra**. Một Docker image nhỏ hơn đồng nghĩa với việc tốn ít **tài nguyên hơn** và có thể là t **hời gian khởi chạy nhanh hơn**. Một cân nhắc khác là xây dựng với `jib` sẽ tạo ra một Java image tối thiểu mà không cần Dockerfile.

## Sử dụng JRE, không phải JDK.

Khi tạo một Docker image, chúng ta nên chỉ dùng các tài nguyên cần thiết nhất để ứng dụng hoạt động chính xác. Điều này có nghĩa là chúng ta nên bắt đầu với việc sử dụng **Java Runtime Environment** (JRE) thích hợp chứ không phải là **Java Development Kit** (JDK) hoàn chỉnh. Thêm nữa, image ứng dụng không nên bảo gồm build system như **Maven** hay **Gradle**. Sản phẩm cuối cùng chỉ cần tệp .jar là đủ.

Nếu bạn muốn build ứng dụng của bạn bên trong một Docker container, bạn có thể dễ dàng tách build image từ production image dử dụng multi-stage build.

**Ví dụ:**

Tôi muốn tạo một Docker image cho ứng dụng java-code-workshop.  Nó là một ứng dụng dựa trên spring-boot, build bằng mave và yêu cầu Java phiên bản 8. Các đơn giản để tạo Docker image sẽ như sau:

```bash
FROM maven:3-openjdk-8
RUN mkdir /usr/src/project
COPY . /usr/src/project
WORKDIR /usr/src/project
RUN mvn spring-boot:run
```

Tôi đã lất một base-image gồm có **maven** và **openjdk8**, chép source code vào trong image này và sử dụng maven để build và chạy ứng dụng. Ví dụ này hoạt động tốt, ứng dụng khởi chạy suôn sẻ. Tuy nhiên, Docker image này được tạo ra với kích thước lên đến 631MB.

Giờ hãy thay đổi Dockerfile này và sử dụng multi-stage build:

```bash
FROM maven:3-openjdk-8 AS build
RUN mkdir /usr/src/project
COPY . /usr/src/project
WORKDIR /usr/src/project
RUN mvn clean package -DskipTests

FROM openjdk:8-jre-alpine
RUN mkdir /project
COPY --from=build /usr/src/project/target/java-code-workshop-0.0.1-SNAPSHOT.jar /project/
WORKDIR /project
CMD java -jar java-code-workshop-0.0.1-SNAPSHOT.jar
```

Những gì diễn ra bây giờ là tôi vẫn dùng maven-openjdk8 để build. Tuy nhiên, nó sẽ không phải bao gồm trong output. Tôi tạo một image mới dựa trên một image nhỏ hơn đánh kể là java 8 JRE và chỉ chép file jar để khởi chạy ứng dụng spring-boot. Bây giờ tôi chỉ phải khởi chạy jar file. Kết quả là một Docker image không bao gồm JDK hay build tool mà chỉ là JRE. Kích thước của image giảm đáng kể xuống còn 132MB.

Kích thước image nhỏ hơn không chỉ đơn giản là để **upload và khởi động nhanh hơn** mà nó cũng là an toàn hơn. Bạn có hình dung điều gì sẽ xẩy ra nếu một vài lý do nào đó, một nguồn tấn công có quyền truy cập container mà đã có sẵn JDK, source code của bạn và build tool?

## Không chạy Docker container dưới quyền root

Khi bạn tạo một Docker container, mặc định nó chạy như là root. Mặc dù điều này thuận tiện cho nhà phát triền, bạn không muốn nó trong image sản phẩm của bạn. Giả sử vì lý do nào đó, kẻ tấn công truy cập vàp terminal và có thể thực thi code. Trong trường hợp này, nó có quyền hạn đáng kể đối với container đang chạy và có khả năng truy cập vào hệ thống tệp máy chủ thông qua các ràng buộc hệ thống tệp với quyền truy cập hệ thống cao không thích hợp.

Cách đơn giản nhất để để ngăn chặn điều này là tạo ta một người dùng cụ thể như sau:

```bash
FROM ubuntu
RUN mkdir /app
RUN groupadd -r brianvermeer && useradd -r -s /bin/false -g brianvermeer brianvermeer
WORKDIR /app
COPY . /app
RUN chmod -R brianvermeer:brianvermeer /app
USER brianvermeer
CMD tail -f /dev/null
```

Ở dòng thứ 3 tôi đã tạo ra một group mới và thêm một user.User này là system user (-r) không kèm theo password và thư mục home. Sau đó thêm user này vào group đã tạo.

Tiếp theo, tôi cấp quyền người dùng đối với thư mục ứng dụng ở dòng 6. Và ở dòng 7, tôi cài đặt user tôi muốn sử dụng. Bằng cách này, người dùng bị hạn chế mới được tạo thực hiện dòng lệnh ở dòng cuối cùng.

## Quét Docker image và ứng dụng java trong quá trình phát triển.

Tạo một Docker image từ một Dockerfile và thậm chí  build lại image có thể dẫn đến lỗ hổng bảo mật trong hệ thống của bạn. Quét Docker image trong quá trình phát triền là một phần của quy trình làm để phát hiện lỗ các lỗ hổng bảo mật càng sớm càng tốt.

Bạn có thể quét Docker image dễ dàng với Snyk CLI. Sau khi cài đặt và xác thực Snyk CLI sử dụng câu lệnh sau để bắt đầu quét.

```bash
snyk container test <imageName>
```

Nếu bạn muốn quét adoptopenjdk thì câu lệnh sẽ là:

```bash
docker pull adoptopenjdk:11
snyk container test adoptopenjdk:11
```

**Output:**

![output-snyk-cli](https://techmaster.vn/media/static/6009/c4ee3ms51co2bih9uacg)

Bạn cũng có thể cùng lúc test và monitor. Đối với monitor, bạn sẽ sử dụng câu lệnh `snyk container monitor <image>`

## Quét ứng dụng Java của bạn

Docker image bạn đang build cũng có thể chứa ứng dụng của bạn. Rõ ràng đây cũng là một điểm có thể bị tấn công. Bạn phải đảm bảo rằng ứng dụng của bạn không có lỗ hổng bảo mật, điều này tăng tính an toàn bảo mật của Docker cho các ứng dụng Java ngay từ đầu. Hình dung rằng ứng dụng của bạn chứa một thư viện cho phép thực thi mã từ xa khi gọi một REST service. Kể cả nếu Docker image của bạn không chứa bất kỳ lỗi bảo mật nào thì điều này là một thảm họa.

Phần lớn mã nhị phân Java bạn đặt vào Docker image là mã bạn import. Bạn có thể coi các libraries và framework mà ứng dụng bạn bạn có như một phần phụ thuộc. Kiểm tra các phụ thuộc này dễ dàng bằng việc sử dụng Snyk CLI. Giống như lần kiểm tra image trước đó, sử dụng lệnh `snyk test` hoặc `snyk monitor` tại thư mục gốc của ứng dụng.

Đối với mã bạn đã viết, bạn nên sử dụng công cụ phân tích mã như SonarLint, PMD hoặc spotbugs. Những công cụ này là những công cụ có mục đích chung để tạo mã tốt hơn nhưng cũng giúp bạn ngăn chặn việc mắc phải những lỗi bảo mật.

## Build to rebuild

Build ứng dụng Java của bạn cho Docker image theo cách mà bạn có thể vứt bỏ nó và rebuild lại bất cứ lúc nào. Giả sử bạn phát hiện một điều gì đó không ổn với container đang chạy. Sẽ rất tuyệt nếu bạn có thể loại bỏ nó và tạo ra một bản mới. Điều này có nghĩa là bạn phải thiết kế một ứng dụng java không trạng thái (stateless), sao cho giữ liệu được lưu trữ bên ngoài container. Một vài điều bạn cần lưu ý:

- không chạy layer cơ sở dữ liệu bên trong container.
- không lưu giữ các tệp trong container.
- đảm bảo bạn tự động khôi phục bộ nhớ cache (nếu có)

Nếu bạn build một ứng dụng mà bạn có thể loại bỏ nó và khởi tạo một thể hiện (instance) mới bất cứ lúc nào thì bạn cũng an toàn để build lại Docker image. Bạn có biết rằng đối với [20% lỗ hổng bảo mật của Docker image](https://snyk.io/blog/shifting-docker-security-left/), bạn có thể khắc phục một hoặc nhiều vấn đề bảo mật bằng việc build lại image. Docker image phần lớn build dựa trên "latest" tag của base-image. Những phiên bản cập nhật gần nhất của base-image thay đổi theo thời gian và được cập nhật liên tục. Tất nhiên, sử dụng phiên bản mới nhất là tốt từ góc độ bảo mật vì bạn sẽ tự động nhận các bản sửa lỗi bảo mật mới nhất, tuy nhiên, bạn cần cân bằng điều này với hiểu biết rằng base-image của bạn sẽ thay đổi theo thời gian và việc tạo lại image của bạn sẽ khó hơn kết quả là ảnh chụp nhanh tại một thời điểm cụ thể.

Ngay cả khi ứng dụng của bạn không thay đổi, hãy thường xuyên build lại Docker image của bạn với base-image mới nhất. Những cải tiến ở các lớp bên dưới như lớp OS có thể cải thiện chất lượng Docker image của bạn và giảm các lỗ hổng bảo mật.

[![video-thumbnail](https://techmaster.vn/media/static/6009/c4ee4fs51co2bih9uad0)](https://www.youtube.com/watch?v=v2SkWn-ZRDg)

Nếu bạn muốn cập nhật các phương pháp hay nhất về bảo mật, giúp việc xây dụng ứng dụng Java trở nên an toàn bảo mật hơn, tham khảo các bài viết sau đây nhé

1. [10 best practices to build a Java container with Docker](https://snyk.io/blog/best-practices-to-build-java-containers-with-docker/) - hướng dẫn chi tiết, từng bước, chỉ cho bạn cách tạo hình ảnh Docker an toàn và hiệu quả cho các ứng dụng Java của bạn.
2. [10 Java security best practices](https://snyk.io/blog/10-java-security-best-practices/) - thực hành bảo mật mà bạn nên tuân theo khi xây dựng các ứng dụng Java cho bất kỳ môi trường nào.