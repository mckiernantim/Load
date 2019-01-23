export const postOptions = [
  {

    department: "electrical",
    children: [
      {
        subDepartment: "instruments",
        options: [

          {
            subTitle: "Source4",
            specifics: "description"
          },
          {
            subTitle: "Fresnel",
            specifics: "description"

          },
          {
            subTitle: "Pars",
            specifics: "description"

          },
          {
            subTitle: "Strips",
            specifics: "description"

          },
          {
            subTitle: "Other",
            specifics: "description"

          },
        ]
      },

      {
        subDepartment: "cables",
        subcategories: [
          {
            subTitle: "edison",
            specifics: ["enter", "length"]
          },
          {
            subTitle: "stage pin",
            specifics: ["enter", "length"]
          },

          {
            subTitle: "dmx",
            specifics: ["enter", "length, enter", "pin"]
          },

          {
            subTitle: "other",
            specifics: ["length"]
          },

        ]
      },
      {
        subDepartment: "hardware",
        subcategories: [
          {
            subTitle: "Cheesegoroughs",
            specifics: [{
              subOption: [{
                type: "swivel",
                materials: ["steel", "aluminum"]
              },
              {
                type: "Rigid",
                materials: ["steel", "aluminum"]
              },
              {
                type: "HalfBoro",
                materials: ["steel", "aluminum"]
              },
              ],
            }]

          },
          {
            subTitle: 'schedule40',
            specifics: ["enter", "length"]
          },
          {
            subTitle: "boomBase",
            specifics: []
          },
          {
            subTitle: "sideArms",
            specifics: []
          },
          {
            subTitle: "cClamps",
            specifics: []
          },
          {
            subTitle: "safetyCables",
            specifics: []
          },
          {
            subTitle: "other",
            specifics: []
          },

        ]

      }
    ]
  },
  {
    department: "scenery",
    children: [
      {
        subDepartment: "materials",

        subcategories: [{
          title: "lumber",
          options: [
            {
              itemTitle: "sheet",
              subOptions: [{
                optionTitle: "masonite",
                optionSpecifics: ["enter", "2x4 specifics", "other specifics"]
              },
              {
                optionTitle: "plywood",
                optionSpecifics: ["enter", "4x8 specifics",]
              }]
            },
            {
              itemTitle: "stick",
              subOptions: [{
                optionTitle: "2x4",
                optionSpecifics: ["enter", "whether painted", "length"]
              },
              {
                optionTitle: "other",
                optionSpecifics: ["enter", "whether painted", "length", "description"]
              }]
            },
          ]
        },

        {
          title: "hardware",
          options: [{
            itemTitle: "pipe ",
            subOptions: [{
              optionTitle: "pipe/drape",
              optionSpecifics: ["enter", "length"]
            },
            {
              optionTitle: "schedule 40",
              optionSpecifics: ["enter", "length"]
            },
            {
              optionTitle: "other",
              optionSpecifics: ["enter", "length"]
            }
            ]
          },
          {
            itemTitle: "track",
            subOptions: [
              {
                optionTitle: "I",
                optionSpecifics: ["enter", "length"]
              },
              {
                optionTitle: "U",
                optionSpecifics: ["enter", "length"]
              },
              {
                optionTitle: "carriers",
                optionSpecifics: ["enter", "length"]
              }]
          },
          {
            itemTitle: "casters ",
            subOptions: [{
              optionTitle: "casters",
              optionSpecifics: ["enter", "length", "weight load"]
            }]
          },
          {
            itemTitle: "fasteners ",
            subOptions: [{
              optionTitle: "nails",
              optionSpecifics: ["enter", "ammount", "size"]
            },
            {
              optionTitle: "screws",
              optionSpecifics: ["enter", "ammount", "size"]
            }]
          },
          {
            itemTitle: "brackets",
            subOptions: [{
              optionTitle: "brackets",
              optionSpecifics: ["enter", "size"]
            }]
          },
          {
            itemTitle: "door",
            subOptions: [{
              optionTitle: "nobs",
              optionSpecifics: ["enter", "size"]
            },
            {
              optionTitle: "other",
              optionSpecifics: ["enter", "size"]
            }]
          },
          {
            itemTitle: "hinges",
            subOptions: [{
              optionTitle: "hinges",
              optionSpecifics: ["enter", "size"]
            }]
          },
          {
            itemTitle: "other",
            subOptions: [{
              optionTitle: "other",
              optionSpecifics: ["enter", "relevant info"]
            }]
          }
          ]
        },
        {
          title: "soft goods",
          options: [{
            itemTitle: "duvetyn",
            subOptions: [{
              optionTitle: "duvetyn",
              optionSpecifics: ["enter", "yardage"]
            },
            {
              subOptions: [{
                optionTitle: "muslin",
                optionSpecifics: ["enter", "yardage"]
              }]
            },
            {
              subOptions: [{
                optionTitle: "other",
                optionSpecifics: ["enter", "yardage"]
              },
              ]
            }]
          }]
        },

        {
          title: "paint",
          options: [{
            itemTitle: "color",
            subOptions: [{
              optionTitle: "eggshell",
              optionSpecifics: ["enter", "gallons"]
            },
            {
              optionTitle: "semi gloss",
              optionSpecifics: ["enter", "gallons"]
            },
            {
              optionTitle: "flat",
              optionSpecifics: ["enter", "gallons"]
            }]
          },
          {
            itemTitle: "primer",
            subOptions: [
              {
                optionTitle: "primer",
                optionSpecifics: ["enter", "gallons"]
              },
            ]
          },
          {
            itemTitle: "joint compound",
            subOptions: [
              {
                optionTitle: "joint compound",
                optionSpecifics: ["enter", "gallons"]
              },
            ]
          },
          {
            itemTitle: "brushes",
            subOptions: [
              {
                optionTitle: "used / washed",
                optionSpecifics: ["enter", "ammount"]
              },
              {
                optionTitle: "new",
                optionSpecifics: ["enter", "ammount"]
              }
            ]
          },
          ]
        }]
      },


      {
        subDepartment: "built/bought",
        subcategories: [{
          title: 'flats (1 by fram, 1/4" luan)',
          options: [{
            itemTitle: "4x8",
            subOptions: [{
              optionTitle: "painted",
              optionSpecifics: ["enter", "number"]

            },
            {
              optionTitle: "unpainted",
              optionSpecifics: ["enter", "number"]

            }
            ]
          },
          ]
        },
        {
          title: "doors",
          options: [{
            itemTitle: "interior",
            subOptions: [{
              optionTitle: "in frame",
              optionSpecifics: ["enter", "size"]
            },
            {
              optionTitle: "stand alone",
              optionSpecifics: ["enter", "size"]
            }]
          },
          {
            itemTitle: "exterior",
            subOptions: [{
              optionTitle: "in frame",
              optionSpecifics: ["enter", "size"]
            },
            {
              optionTitle: "stand alone",
              optionSpecifics: ["enter", "size"]
            }]
          }]
        },
        {
          title: "decking/flooring",
          options: [{
            itemTitle: "wooden platforms",
            subOptions: [{
              optionTitle: "4x8",
              optionSpecifics: ["enter", "height"]
            },
            {
              optionTitle: "other",
              optionSpecifics: ["enter", "height"]

            }]
          },
          {
            itemTitle: "steel deck",
            subOptions: [{
              optionTitle: "4x8",
              optionSpecifics: ["enter", "height"]
            },
            {
              optionTitle: "other",
              optionSpecifics: ["enter", "height"]
            }]
          },
          {
            itemTitle: "marly",
            subOptions: [{
              optionTitle: "marly",
              optionSpecifics: ["enter", "color"]
            }]
          },
          {
            itemTitle: "carpet",
            subOptions: [{
              optionTitle: "color",
              optionSpecifics: ["enter", "color", "pile"]
            }]
          },
          {
            itemTitle: "other",
            subOptions: [{
              optionTitle: "other",
              optionSpecifics: ["enter", "specifics"]
            }]
          }]
        },

        {
          title: "soft goods",
          options: [{
            itemTitle: "cycs",
            subOptions: [{
              optionTitle: "cycs",
              optionSpecifics: ["enter", "dimensions", "fabric type", "color", "fullness", "webbing?", "flame cert?"]
            },
            ]
          },
          {
            itemTitle: "legs",
            subOptions: [{
              optionTitle: "legs",
              optionSpecifics: ["enter", "dimensions", "fabric type", "color", "fullness", "webbing?", "flame cert?"]
            },
            ]
          },
          {
            itemTitle: "border",
            subOptions: [{
              optionTitle: "border",
              optionSpecifics: ["enter", "dimensions", "fabric type", "color", "fullness", "webbing?", "flame cert?"]
            },
            ]
          },
          {
            itemTitle: "backdrops",
            subOptions: [{
              optionTitle: "backdrops",
              optionSpecifics: ["enter", "dimensions", "fabric type", "color", "fullness", "webbing?", "flame cert?"]
            },
            ]
          }]
        }

        ]
      }
    ]
  }]
