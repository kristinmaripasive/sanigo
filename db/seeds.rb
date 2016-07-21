# Comment.destroy_all
# Location.destroy_all
# locations = Location.create([
#   {name: "Postpub", address: "1422 L St NW, Washington, DC 20005"},
#   {name: "General Assembly", address: "1133 15th St NW, Washington, DC 20005"},
# ])
# Comment.create([
#   {title: "First comment", body: "This is a great bathroom!" , location: locations[0]},
#   {title: "Second comment", body: "This is a terrible place!" , location: locations[1]},
# ])


data = JSON.parse(File.read("db/locations_data.json"))
Location.destroy_all
Location.create!(data)
