const plants = [
    {
      id: "1",
      name: "Snake Plant",
      botanicalName: "Sansevieria trifasciata",
      imageUrl: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg?auto=compress&cs=tinysrgb&w=1200",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "The Snake Plant, also known as Mother-in-Law's Tongue, is a hardy and low-maintenance plant that can thrive in low light and requires minimal watering.",
    },
    {
      id: "2",
      name: "Fiddle Leaf Fig",
      botanicalName: "Ficus lyrata",
      imageUrl: "https://images.pexels.com/photos/6044736/pexels-photo-6044736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Medium",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring"],
      description:
        "The Fiddle Leaf Fig is a popular indoor tree known for its large, violin-shaped leaves. It prefers bright, indirect light and consistent watering.",
    },
    {
      id: "3",
      name: "Aloe Vera",
      botanicalName: "Aloe barbadensis miller",
      imageUrl: "https://images.pexels.com/photos/1549194/pexels-photo-1549194.jpeg?auto=compress&cs=tinysrgb&w=1200",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Summer"],
      description:
        "Aloe Vera is a succulent plant species known for its medicinal properties. It requires bright light and minimal water, making it easy to care for.",
    },
    {
      id: "4",
      name: "Spider Plant",
      botanicalName: "Chlorophytum comosum",
      imageUrl: "https://images.pexels.com/photos/3175415/pexels-photo-3175415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "The Spider Plant is a resilient houseplant known for its air-purifying qualities and ability to thrive in a variety of light conditions.",
    },
    {
      id: "5",
      name: "Peace Lily",
      botanicalName: "Spathiphyllum",
      imageUrl: "https://images.pexels.com/photos/3698376/pexels-photo-3698376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "High",
      lightNeed: "Full Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Peace Lilies are known for their beautiful white flowers and ability to thrive in low light. They require frequent watering to maintain their lush foliage.",
    },
    {
      id: "6",
      name: "Rubber Plant",
      botanicalName: "Ficus elastica",
      imageUrl: "https://images.pexels.com/photos/213727/pexels-photo-213727.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Fall"],
      description:
        "The Rubber Plant is a popular indoor tree with large, glossy leaves. It thrives in medium to bright light and needs regular watering.",
    },
    {
      id: "7",
      name: "ZZ Plant",
      botanicalName: "Zamioculcas zamiifolia",
      imageUrl:
        "https://images.pexels.com/photos/5050497/pexels-photo-5050497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "The ZZ Plant is a hardy and drought-tolerant plant that can survive in low light and requires minimal watering, making it perfect for beginners.",
    },
    {
      id: "8",
      name: "Monstera Deliciosa",
      botanicalName: "Monstera deliciosa",
      imageUrl:
        "https://images.pexels.com/photos/20337858/pexels-photo-20337858/free-photo-of-pflanzen-kuche-zimmer-raum.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Monstera Deliciosa, also known as the Swiss Cheese Plant, is famous for its large, split leaves. It prefers indirect light and moderate watering.",
    },
    {
      id: "9",
      name: "Pothos",
      botanicalName: "Epipremnum aureum",
      imageUrl:
        "https://images.pexels.com/photos/3401172/pexels-photo-3401172.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Pothos is a versatile and low-maintenance plant that can thrive in low light and requires infrequent watering. It's known for its trailing vines.",
    },
    {
      id: "10",
      name: "Boston Fern",
      botanicalName: "Nephrolepis exaltata",
      imageUrl:
        "https://images.pexels.com/photos/3854749/pexels-photo-3854749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/3854749/pexels-photo-3854749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "High",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Boston Ferns are lush, green plants that thrive in humid environments with bright, indirect light. They need regular watering to keep their fronds healthy.",
    },
    {
      id: "11",
      name: "Orchid",
      botanicalName: "Orchidaceae",
      imageUrl:
        "https://images.pexels.com/photos/66181/pexels-photo-66181.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Orchids are elegant flowering plants that prefer bright, indirect light and minimal watering. They are known for their beautiful and long-lasting blooms.",
    },
    {
      id: "12",
      name: "Jade Plant",
      botanicalName: "Crassula ovata",
      imageUrl:
        "https://images.pexels.com/photos/23526801/pexels-photo-23526801/free-photo-of-immergrun-stillleben-succulenten-topfe.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring", "Fall"],
      description:
        "The Jade Plant is a succulent known for its thick, fleshy leaves. It thrives in bright light and requires minimal watering, making it easy to care for.",
    },
    {
      id: "13",
      name: "Philodendron",
      botanicalName: "Philodendron spp.",
      imageUrl:"https://images.pexels.com/photos/6207482/pexels-photo-6207482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Philodendrons are popular houseplants known for their heart-shaped leaves. They prefer indirect light and consistent watering.",
    },
    {
      id: "14",
      name: "Cactus",
      botanicalName: "Cactaceae",
      imageUrl:
        "https://images.pexels.com/photos/937799/pexels-photo-937799.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Summer"],
      description:
        "Cacti are desert plants that thrive in bright light and require very little water. They are known for their unique shapes and spines.",
    },
    {
      id: "15",
      name: "Lavender",
      botanicalName: "Lavandula",
      imageUrl:
        "https://images.pexels.com/photos/10088268/pexels-photo-10088268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring"],
      description:
        "Lavender is a fragrant herb known for its purple flowers and soothing scent. It requires full sun and minimal watering.",
    },
    {
      id: "16",
      name: "Succulent",
      botanicalName: "Succulents",
      imageUrl:
        "https://images.pexels.com/photos/305827/pexels-photo-305827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Summer", "Fall"],
      description:
        "Succulents are a diverse group of plants known for their water-storing capabilities. They thrive in bright light and require minimal watering.",
    },
    {
      id: "17",
      name: "Calathea",
      botanicalName: "Calathea spp.",
      imageUrl:
        "https://images.pexels.com/photos/9707463/pexels-photo-9707463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "High",
      lightNeed: "Full Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Calatheas are known for their stunning, patterned leaves. They thrive in low light and high humidity, requiring regular watering to keep their foliage vibrant.",
    },
    {
      id: "18",
      name: "Yucca",
      botanicalName: "Yucca",
      imageUrl:
        "https://images.pexels.com/photos/18926805/pexels-photo-18926805/free-photo-of-wuste-pflanze-wachstum-yucca.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring"],
      description:
        "Yucca plants are hardy and drought-tolerant, known for their long, sword-shaped leaves. They thrive in bright light and require minimal watering.",
    },
    {
      id: "19",
      name: "Bamboo",
      botanicalName: "Bambusoideae",
      imageUrl:
        "https://images.pexels.com/photos/13455590/pexels-photo-13455590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "Medium",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Bamboo plants are fast-growing and known for their tall, graceful stalks. They prefer bright light and consistent watering, especially during the growing season.",
    },
    {
      id: "20",
      name: "Anthurium",
      botanicalName: "Anthurium",
      imageUrl:
        "https://images.pexels.com/photos/14378312/pexels-photo-14378312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Fall"],
      description:
        "Anthuriums are known for their striking, heart-shaped flowers and glossy leaves. They prefer bright, indirect light and moderate watering.",
    },
    {
      id: "21",
      name: "English Ivy",
      botanicalName: "Hedera helix",
      imageUrl:
        "https://images.pexels.com/photos/7728009/pexels-photo-7728009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "Medium",
      lightNeed: "Full Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "English Ivy is a versatile plant known for its trailing vines and ability to thrive in shaded areas. It requires moderate watering.",
    },
    {
      id: "22",
      name: "Dumb Cane",
      botanicalName: "Dieffenbachia",
      imageUrl:
        "https://images.pexels.com/photos/11374763/pexels-photo-11374763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "High",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Dumb Cane is a popular houseplant known for its large, variegated leaves. It prefers indirect light and regular watering.",
    },
    {
      id: "23",
      name: "Golden Pothos",
      botanicalName: "Epipremnum aureum",
      imageUrl:
        "https://images.pexels.com/photos/14534662/pexels-photo-14534662.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Golden Pothos is a low-maintenance plant that can thrive in low light and requires infrequent watering. It's known for its trailing vines.",
    },
    {
      id: "24",
      name: "Peace Lily",
      botanicalName: "Spathiphyllum",
      imageUrl:
        "https://images.pexels.com/photos/6627081/pexels-photo-6627081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      waterNeed: "High",
      lightNeed: "Full Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Peace Lilies are known for their beautiful white flowers and ability to thrive in low light. They require frequent watering to maintain their lush foliage.",
    },
    {
      id: "25",
      name: "Areca Palm",
      botanicalName: "Dypsis lutescens",
      imageUrl:
        "https://images.pexels.com/photos/3126442/pexels-photo-3126442.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Areca Palms are popular indoor palms known for their feathery, arching fronds. They prefer indirect light and regular watering.",
    },
    {
      id: "26",
      name: "Swiss Cheese Plant",
      botanicalName: "Monstera adansonii",
      imageUrl:
        "https://images.pexels.com/photos/17719773/pexels-photo-17719773/free-photo-of-plant-in-flowerpot-on-windowsill.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "The Swiss Cheese Plant is known for its unique, perforated leaves. It prefers bright, indirect light and moderate watering.",
    },
    {
      id: "27",
      name: "Chinese Money Plant",
      botanicalName: "Pilea peperomioides",
      imageUrl:
        "https://images.pexels.com/photos/6898560/pexels-photo-6898560.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Low",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "The Chinese Money Plant is a trendy houseplant known for its round, coin-shaped leaves. It thrives in bright, indirect light and requires minimal watering.",
    },
    {
      id: "28",
      name: "Bird of Paradise",
      botanicalName: "Strelitzia reginae",
      imageUrl:
        "https://images.pexels.com/photos/942649/pexels-photo-942649.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "High",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "Bird of Paradise is known for its striking, tropical flowers. It requires bright light and regular watering to thrive.",
    },
    {
      id: "29",
      name: "Jade Plant",
      botanicalName: "Crassula ovata",
      imageUrl:
        "https://images.pexels.com/photos/9130712/pexels-photo-9130712.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Low",
      lightNeed: "Full Sun",
      fertiliserSeason: ["Spring", "Fall"],
      description:
        "The Jade Plant is a succulent known for its thick, fleshy leaves. It thrives in bright light and requires minimal watering, making it easy to care for.",
    },
    {
      id: "30",
      name: "African Violet",
      botanicalName: "Saintpaulia",
      imageUrl:
        "https://images.pexels.com/photos/7814295/pexels-photo-7814295.jpeg?auto=compress&cs=tinysrgb&w=1600",
      waterNeed: "Medium",
      lightNeed: "Partial Shade",
      fertiliserSeason: ["Spring", "Summer"],
      description:
        "African Violets are popular indoor flowering plants known for their vibrant, velvety flowers. They prefer indirect light and moderate watering.",
    },
  ];
console.log(plants);

export default plants;