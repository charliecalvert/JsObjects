require 'ruble'

template "JavaScript Template" do |t|
  t.filetype = "*.js"
  t.location = "templates/template.js"
end

template "Bridge" do |t|
  t.filetype = "*.js"
  t.location = "templates/Bridge.template"
end

template "Factory" do |t|
  t.filetype = "*.js"
  t.location = "templates/Factory.template"
end

template "Modular" do |t|
  t.filetype = "*.js"
  t.location = "templates/Modular.template"
end