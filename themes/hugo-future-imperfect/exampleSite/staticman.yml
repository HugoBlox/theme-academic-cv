# Name of the property. You can have multiple properties with completely
# different config blocks for different sections of your site.
# For example, you can have one property to handle comment submission and
# another one to handle posts.
comments:
  # (*) REQUIRED
  #
  # Names of the fields the form is allowed to submit. If a field that is
  # not here is part of the request, an error will be thrown.
  allowedFields: ["name", "email", "website", "body"]

  # When allowedOrigins is defined, only requests sent from one of the domains
  # listed will be accepted.
  # allowedOrigins: ["localhost", "hugo.staticman.net"]

  # (*) REQUIRED
  #
  # Name of the branch being used. Must match the one sent in the URL of the
  # request.
  branch: "master"

  # List of fields to be populated automatically by Staticman and included in
  # the data file. Keys are the name of the field. The value can be an object
  # with a `type` property, which configures the generated field, or any value
  # to be used directly (e.g. a string, number or array)
  generatedFields:
    date:
      type: date

  # The format of the generated data files. Accepted values are "json", "yaml"
  # or "frontmatter"
  format: "json"

  # Whether entries need to be appproved before they are published to the main
  # branch. If set to `true`, a pull request will be created for your approval.
  # Otherwise, entries will be published to the main branch automatically.
  moderation: false

  # Name of the site. Used in notification emails.
  name: ""

  # (*) REQUIRED
  #
  # Destination path (directory) for the data files. Accepts placeholders.
  path: "data/comments/{options.entryId}"

  # (*) REQUIRED
  #
  # Destination path (filename) for the data files. Accepts placeholders.
  filename: "{@id}"

  # Names of required files. If any of these isn't in the request or is empty,
  # an error will be thrown.
  requiredFields: ["name", "body"]

  # List of transformations to apply to any of the fields supplied. Keys are
  # the name of the field and values are possible transformation types.
  transforms:
    email: md5

  # View the README at https://github.com/eduardoboucas/staticman-recaptcha
  reCaptcha:
    enabled: false
    siteKey: ""
    secret: ""
