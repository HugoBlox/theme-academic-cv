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
        Click {{< staticref "https://forms.aweber.com/form/97/536500397.htm" "newtab" >}}here{{< /staticref >}}to receive exciting updates, valuable content, and special offers directly in your inbox. Alternatively, send me a message in the form below.
        {style="text-align: justify;"}

      # Contact (add or remove contact options as necessary)
      # email: mikaranja@gmail.com
      # phone: +254 705 872 780
      # appointment_url: 'https://calendly.com'
      # address:
      #   street: Nairobi
      #   city: Nairobi
      #   region: KE
      #   postcode: '20746-00202'
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
      #     link: 'https://twitter.com/mikaranja'
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