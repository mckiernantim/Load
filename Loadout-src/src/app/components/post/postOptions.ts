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
              itemTile: "sheet",
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
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "soft goods",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "paint",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        }]
      },


      {
        subDepartment: "built/bought",
        subcategories: [{
          title: 'flats (1 by fram, 1/4" luan)',
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "doors",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "decking/flooring",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "stairs",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        },
        {
          title: "soft goods",
          options: [{
            itemTile: "",
            subOptions: [{
              optionTitle: "",
              optionSpecifics: []
            }]
          }]
        }

        ]
      }
    ]
  }]
