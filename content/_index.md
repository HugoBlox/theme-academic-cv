---
title: '我们的学术团队'
date: 2025-11-04
type: landing

design:
  spacing: '6rem'

sections:
  # 第一位老师 - 杨沛琦
  - block: resume-biography-3
    content:
      username: teacher_1
      text: |
        **姓名**: 杨沛琦  
        **职称**: 教授  
        **研究方向**: 遥感与生态学，植被物候变化研究  
        **联系方式**: yangpeiqi@example.com
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher1Modal">
          点击查看详细信息
        </button>
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 第二位老师 - 刘婧
  - block: resume-biography-3
    content:
      username: teacher_2
      text: |
        **姓名**: 刘婧  
        **职称**: 副教授  
        **研究方向**: 气候变化与生态学  
        **联系方式**: liujing@example.com
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher2Modal">
          点击查看详细信息
        </button>
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 第三位老师 - 李龙
  - block: resume-biography-3
    content:
      username: teacher_3
      text: |
        **姓名**: 李龙  
        **职称**: 讲师  
        **研究方向**: 植被遥感分析与气候影响  
        **联系方式**: lilong@example.com
        <button type="button" data-bs-toggle="modal" data-bs-target="#teacher3Modal">
          点击查看详细信息
        </button>
    design:
      css_class: hbx-bg-gradient
      avatar:
        size: medium
        shape: circle

  # 模态框 - 第一位老师（杨沛琦）
  - block: markdown
    content: |
      <div class="modal fade" id="teacher1Modal" tabindex="-1" aria-labelledby="teacher1ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher1ModalLabel">杨沛琦 - 教授</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- 头像照片 -->
              <img src="uploads/yangpeiqi.jpg" alt="杨沛琦头像" style="width:150px; border-radius:50%; display:block; margin-bottom:15px;">
              <p><strong>研究方向</strong>: 遥感与生态学，植被物候变化研究</p>
              <p><strong>联系方式</strong>: yangpeiqi@example.com</p>
              <p><strong>简历</strong>: <a href="uploads/yangpeiqi_resume.pdf">下载简历</a></p>
              <p><strong>研究兴趣</strong>: 遥感技术在植被物候监测中的应用，气候变化对生态系统的影响等。</p>
            </div>
          </div>
        </div>
      </div>

  # 模态框 - 第二位老师（刘婧）
  - block: markdown
    content: |
      <div class="modal fade" id="teacher2Modal" tabindex="-1" aria-labelledby="teacher2ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher2ModalLabel">刘婧 - 副教授</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- 头像照片 -->
              <img src="uploads/liujing.png" alt="刘婧头像" style="width:150px; border-radius:50%; display:block; margin-bottom:15px;">
              <p><strong>研究方向</strong>: 气候变化与生态学</p>
              <p><strong>联系方式</strong>: liujing@example.com</p>
              <p><strong>简历</strong>: <a href="uploads/liujing_resume.pdf">下载简历</a></p>
              <p><strong>研究兴趣</strong>: 研究气候变化对植物生长周期的影响，遥感数据的处理与分析等。</p>
            </div>
          </div>
        </div>
      </div>

  # 模态框 - 第三位老师（李龙）
  - block: markdown
    content: |
      <div class="modal fade" id="teacher3Modal" tabindex="-1" aria-labelledby="teacher3ModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="teacher3ModalLabel">李龙 - 讲师</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <!-- 头像照片 -->
              <img src="uploads/lilong.jpg" alt="李龙头像" style="width:150px; border-radius:50%; display:block; margin-bottom:15px;">
              <p><strong>研究方向</strong>: 植被遥感分析与气候影响</p>
              <p><strong>联系方式</strong>: lilong@example.com</p>
              <p><strong>简历</strong>: <a href="uploads/lilong_resume.pdf">下载简历</a></p>
              <p><strong>研究兴趣</strong>: 专注于植被生长周期与气候因素之间的关系，遥感技术在农业中的应用。</p>
            </div>
          </div>
        </div>
      </div>
