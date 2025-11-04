---
title: '我们的学术团队'
date: 2025-11-04
type: landing

design:
  spacing: '6rem'

sections:
  # 第一位老师 - 李四
  - block: resume-biography-3
    content:
      username: teacher_1
      text: |
        **姓名**: 李四  
        **职称**: 教授  
        **研究方向**: 遥感与生态学，植被物候变化研究  
        **联系方式**: lisi@example.com  
        <details>
        <summary>点击查看更多信息</summary>
        **简历**: [下载简历](uploads/lisi_resume.pdf)  
        **研究兴趣**: 主要研究遥感技术在植被物候监测中的应用，气候变化对生态系统的影响等。
        </details>
      button:
        text: 下载简历
        url: uploads/lisi_resume.pdf
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 第二位老师 - 张三
  - block: resume-biography-3
    content:
      username: teacher_2
      text: |
        **姓名**: 张三  
        **职称**: 副教授  
        **研究方向**: 气候变化与生态学  
        **联系方式**: zhangsan@example.com  
        <details>
        <summary>点击查看更多信息</summary>
        **简历**: [下载简历](uploads/zhangsan_resume.pdf)  
        **研究兴趣**: 研究气候变化对植物生长周期的影响，遥感数据的处理与分析等。
        </details>
      button:
        text: 下载简历
        url: uploads/zhangsan_resume.pdf
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 第三位老师 - 王五
  - block: resume-biography-3
    content:
      username: teacher_3
      text: |
        **姓名**: 王五  
        **职称**: 讲师  
        **研究方向**: 植被遥感分析与气候影响  
        **联系方式**: wangwu@example.com  
        <details>
        <summary>点击查看更多信息</summary>
        **简历**: [下载简历](uploads/wangwu_resume.pdf)  
        **研究兴趣**: 专注于植被生长周期与气候因素之间的关系，遥感技术在农业中的应用。
        </details>
      button:
        text: 下载简历
        url: uploads/wangwu_resume.pdf
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 组员展示
  - block: collection
    content:
      title: '我们的团队'
      filters:
        folders:
          - team
    design:
      view: list
      columns: 2
