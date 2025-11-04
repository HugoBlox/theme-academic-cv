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
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher1Modal">
          点击查看详细信息
        </button>
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
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher2Modal">
          点击查看详细信息
        </button>
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
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher3Modal">
          点击查看详细信息
        </button>
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 模态框 - 第一位老师
  - block: markdown
    content: |
      <div class="modal fade" id="teacher1Modal" tabindex="-1" aria-labelledby="teacher1ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher1ModalLabel">李四 - 教授</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>研究方向</strong>: 遥感与生态学，植被物候变化研究</p>
              <p><strong>联系方式</strong>: lisi@example.com</p>
              <p><strong>简历</strong>: [下载简历](uploads/lisi_resume.pdf)</p>
              <p><strong>研究兴趣</strong>: 主要研究遥感技术在植被物候监测中的应用，气候变化对生态系统的影响等。</p>
            </div>
          </div>
        </div>
      </div>

  # 模态框 - 第二位老师
  - block: markdown
    content: |
      <div class="modal fade" id="teacher2Modal" tabindex="-1" aria-labelledby="teacher2ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher2ModalLabel">张三 - 副教授</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>研究方向</strong>: 气候变化与生态学</p>
              <p><strong>联系方式</strong>: zhangsan@example.com</p>
              <p><strong>简历</strong>: [下载简历](uploads/zhangsan_resume.pdf)</p>
              <p><strong>研究兴趣</strong>: 研究气候变化对植物生长周期的影响，遥感数据的处理与分析等。</p>
            </div>
          </div>
        </div>
      </div>

  # 模态框 - 第三位老师
  - block: markdown
    content: |
      <div class="modal fade" id="teacher3Modal" tabindex="-1" aria-labelledby="teacher3ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher3ModalLabel">王五 - 讲师</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>研究方向</strong>: 植被遥感分析与气候影响</p>
              <p><strong>联系方式</strong>: wangwu@example.com</p>
              <p><strong>简历</strong>: [下载简历](uploads/wangwu_resume.pdf)</p>
              <p><strong>研究兴趣</strong>: 专注于植被生长周期与气候
