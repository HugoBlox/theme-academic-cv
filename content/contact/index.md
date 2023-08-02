---
# Leave the homepage title empty to use the site title
title:
date: 2022-10-24
type: landing

sections:
  - block: contact
    id: contact
    content:
      title: Contact
      subtitle:
      text: |-
        To send me a message, fill the form below.
        {style="text-align: justify;"}

      # Contact (add or remove contact options as necessary)
      # email: 
      # phone: 
      # appointment_url: 'https://calendly.com'
      # address:
      #   street: 
      #   city: 
      #   region: 
      #   postcode: ''
      #   country: KENYA
      #   country_code: KE
      # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
      # office_hours:
      #   - 'Monday 10:00 to 13:00'
      #   - 'Wednesday 09:00 to 10:00'
      # contact_links:
      #   - icon: twitter
      #     icon_pack: fab
      #     name: DM Me
      #     link: 'https://twitter.com/'
      #   - icon: skype
      #     icon_pack: fab
      #     name: Skype Me
      #     link: ''
      #   - icon: video
      #     icon_pack: fas
      #     name: Zoom Me
      #     link: 'https://zoom.com'
      # Automatically link email and phone or display as text?
      autolink: true
      # Email form provider
      form:
        provider: netlify
        formspree:
          id:
        netlify:
          # Enable CAPTCHA challenge to reduce spam?
          captcha: false
    design:
      columns: '2'
---