---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: about.biography
    id: about
    content:
      title: Biography
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin

  - block: collection
    id: news
    content:
      title: Recent News
      subtitle: ''
      text: ''
      # Choose how many pages you would like to display (0 = all pages)
      count: 5
      # Filter on criteria
      filters:
        folders:
          - news
        author: ""
        category: ""
        tag: ""
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ""
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      # Choose a layout view
      view: compact
      columns: '2'

  - block: collection
    id: publications
    content:
      title: Selected Publications
      text: |-
        {{% callout note %}}
        Quickly discover relevant content by [filtering publications](./publication/).
        {{% /callout %}}
      filters:
        folders:
          - publication
        exclude_featured: true
    design:
      columns: '2'
      view: citation
  - block: portfolio
    id: projects
    content:
      title: Projects
      filters:
        folders:
          - project
      # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
      default_button_index: 0
      # Filter toolbar (optional).
      # Add or remove as many filters (`filter_button` instances) as you like.
      # To show all items, set `tag` to "*".
      # To filter by a specific tag, set `tag` to an existing tag name.
      # To remove the toolbar, delete the entire `filter_button` block.
      buttons:
        - name: All
          tag: '*'
        - name: Research
          tag: Research
        - name: Teaching
          tag: Teaching
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      view: Compact
      # For Showcase view, flip alternate rows?
      flip_alt_rows: false
 
  - block: collection
    id: students
    content:
      title: students
      filters:
        folders:
          - students
    design:
      columns: '2'
      view: list

  - block: contact
    id: contact
    content:
      title: 如果您对边缘智能和人工智能研究感兴趣，欢迎随时与我联系！快捷发送邮件的方式如下：
      subtitle: ''
      text: ''
      # Contact details - edit or remove options as needed
      email: ffshen@nau.edu.cn
      address:
        street: 江苏省
        city: 南京市
        region: 浦口区江浦街道雨山西路86号致明楼222办公室
      office_hours:
        - '周一至周五 09:00 to 17:00'
      contact_links:
        - icon: weixin
          icon_pack: fab
          name: WeChat Me
          link: 'authors/admin/weixin.jpg'
        # Automatically link email and phone or display them just as text?
      autolink: true
      # Choose an email form provider (netlify/formspree)
      form:
        provider: formspree
        formspree:
          # If using Formspree, enter your Formspree form ID
          id: 'xleyzoew'
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '1'

---
