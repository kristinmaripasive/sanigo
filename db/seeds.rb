Comment.destroy_all
Location.destroy_all
locations = Location.create(
[
  {name:"Postpub", address: "1422 L St NW, Washington, DC 20005", description: "Local dive bar with a bathroom."},
  {name:"General Assembly", address: "1133 15th St NW, Washington, DC 20005", description: "WebDev bootcamp, with a bathroom."},
  {name:"Peet's Coffee & Tea", address: "1156 15th St NW Washington, DC 20005", description: "Cafe with lots of Pokemon lures, and a bathroom"},
  {name:"The Westin", address: "1400 M St NW Washington, DC 20005", description: "A five-star hotel with luxurious bathrooms"}
]
)
Comment.create([
  {author: "James", body: "This is a great bathroom!" , location: locations.first},
  {author: "Arthur", body: "This is a terrible place!" , location: locations.last},
])

# Comment.create(author: "Bob", body: "This is a great bathroom!" , location: locations[0])
# Comment.create(author: "Jim", body: "This is a terrible place!" , location: locations[1])
