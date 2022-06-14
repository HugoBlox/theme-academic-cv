---
# An instance of the Contact widget.
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 130

title: Contact
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true

  # # Email form provider
  # form:
  #   provider: netlify
  #   formspree:
  #     id:
  #   netlify:
  #     # Enable CAPTCHA challenge to reduce spam?
  #     captcha: false

  # Contact details (edit or remove options as required)
  # email: test@example.org
  # phone: 888 888 88 88
  # coordinates:
  #   latitude: '37.4275'
  #   longitude: '-122.1697'
  # directions: Enter Building 1 and take the stairs to Office 200 on Floor 2
  # office_hours:
  #   - 'Monday 10:00 to 13:00'
  #   - 'Wednesday 09:00 to 10:00'
  # appointment_url: 'https://calendly.com'
  contact_links:
    - icon: twitter
      icon_pack: fab
      name: DM us
      link: 'https://twitter.com/SizeEcology'
    - icon: github
      icon_pack: fab
      name: collaborate
      link: 'https://github.com/size-ecology-group'
    - icon: envelope
      icon_pack: fas
      name: email
      link: 'mailto:info@sizeecology.org'
    # - icon: video
    #   icon_pack: fas
    #   name: Zoom Me
    #   link: 'https://zoom.com'
    
  address:
    street: 20 Castray Esplanade, Battery Point
    city: Hobart
    region: Tasmania
    postcode: '7004'
    country: Australia

design:
  columns: '2'
---
