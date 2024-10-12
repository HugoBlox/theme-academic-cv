---
# Leave the homepage title empty to use the site title
title: ""
date: 2022-10-24
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      button:
        text: Download CV
        url: uploads/cv.pdf
    design:
      background:
        color: black
        image:
          # Name of image in `assets/media/`.
          filename: 'banner.jpg'
          # Apply image filters?
          filters:
            # Darken the image? Range 0-1 where 1 is transparent and 0 is opaque.
            brightness: 0.5
          size: cover
          # Use a fun parallax-like fixed background effect on desktop? true/false
          parallax: true
      biography:
        # Customize the CSS style of your biography text (optional)
        style: ''

  - block: resume-experience
    id: experience
    content:
      # The user's folder name in `content/authors/`
      username: admin
    design:
      # Hugo date format
      date_format: 'January 2006'
      # Education or Experience section first?
      is_education_first: false

  - block: collection
    id: publications
    content:
      title: '📚 Recent Publications'
      text: ""
      filters:
        folders:
          - publication
    design:
      view: citation

  - block: markdown
    id: courses
    content:
      title: 'Teaching activities'
      subtitle: ''
      text: |
        * INFOM115 - **Software Testing**: <br/>
        *Organisation:* Session labs and lectures for a total of 15h <br/>
        *Public:* 1st year Masters students, specialised in Software Engineering, from the computer science faculty of the University of Namur, Belgium <br/>
        *Content:* Supervised by Dr. Gilles Perrouin, we teach the fundamentals of software testing and more advanced techniques (mutation testing, metamorphic testing, fuzzy testing, test smells, etc.) <br/>
        *Academic years:* 2019-2020, 2020-2021, 2021-2022, 2022-2023 <br/> <br/>

        * INFOB221 - **Mathematics Fundamentals for Computer Science** (part 2): <br/>
        *Organisation:* 15h of tutoring <br/>
        *Public:* 2nd year of Bachelor students from the Economics and Computer Science faculties of the University of Namur, Belgium <br/>
        *Content:* Basic concepts of Mathematics for Cryptography mainly (modular arithmetic, discrete log, symmetric encryption and asymmetric encryption, elliptic curves) <br/>
        *Academic years:* 2019-2020, 2020-2021, 2021-2022 <br/> <br/>

        * IHDCB339 - **Introduction to the Scientific Approach**: <br/> 
        *Organisation:* One group project supervision <br/>
        *Public:* 3d year of Bachelor students from the Computer Science faculty of the University of Namur, Belgium <br/>
        *Content:* In this project, I supervised a group of two students, guiding them in developing essential skills such as bibliographic research, critical source appraisal, scientific state-of-the-art writing, and effective scientific result presentation, while also ensuring a deep understanding of research problem definition, context, motivation, and related work within the field of information systems. <br/>
        *Academic years:* 2020-2021
  
  - block: markdown
    id: services
    content:
      title: 'Service activities'
      text: |
        I'm taking part in several committees and helping the community in various ways:
        
        * ***Reviewing*** :<br/>
        
          * for specialised conferences: ICSR (research track, as a subreviewer), SPLC (research track, demo & tools), ESEC-FSE (artefacts), ECOOP (artefacts)&nbsp;;<br/>
        
          * for journals: EMSE (as a subreviewer), Software Quality Journal, SoSyM&nbsp;;<br/><br/>
        
        * Acting as a ***Student Volunteer*** for OR 2018 and SPLC 2023&nbsp;;<br/><br/>
        
        * Representing scientifics at the Computer Science ***Faculty Council***&nbsp;;<br/><br/>
        
        * Representing and promoting the Computer Science Faculty at several ***Students Fairs***&nbsp;;<br/><br/>
        
        * Representing scientifics at the ***Section Groups***, the place where students can express themselves to improve the faculty.
  
  - block: collection
    id: activities
    content:
      title: My Adventures
      text: 'Check out my activities and interests, extending beyond research!'
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - activities
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: article-grid #date-title-summary #card
      columns: 3

---
