const healthSnippets = [
    { 
      title: "Why Take a Walk After Eating?", 
      summary: "A short walk after meals can aid digestion, stabilize blood sugar, and improve your mood.",
      body: "Walking after meals is a great way to support digestion and keep blood sugar levels steady, reducing spikes that often lead to energy crashes. This simple habit promotes the release of endorphins, which improves mood and can reduce post-meal lethargy. A gentle walk for 10-15 minutes can also ease bloating and support a healthy metabolism. Over time, it helps prevent weight gain and boosts cardiovascular health.",
      imageName: "walk-after-eating" 
    },
    { 
      title: "Add More Color to Your Plate", 
      summary: "Eating colorful fruits and vegetables boosts immunity and prevents disease.",
      body: "Colorful fruits and vegetables provide a wide range of vitamins, minerals, and antioxidants essential for good health. Each color represents unique nutrients that can help protect against disease, support the immune system, and improve organ function. For instance, red foods like tomatoes contain lycopene for heart health, while leafy greens provide folate and iron for energy. Adding variety keeps meals interesting and balanced, offering essential phytonutrients and fiber for optimal digestion.",
      imageName: "color-to-plate" 
    },
    { 
      title: "Limit Sugar to Boost Energy", 
      summary: "Cutting back on sugar can provide steady, sustained energy and prevent crashes.",
      body: "High sugar intake is often followed by a crash, leaving you tired and sluggish. Reducing sugar helps maintain stable energy levels throughout the day, as your body avoids the drastic insulin spikes caused by sugar. Opt for natural sources of sweetness like fruit, which come with fiber to slow down sugar absorption. Over time, this change can also improve mood stability, reduce cravings, and support overall health by preventing metabolic issues.",
      imageName: "limit-sugar" 
    },
    { 
      title: "Why Eat Mindfully?", 
      summary: "Eating slowly aids digestion, prevents overeating, and enhances enjoyment of meals.",
      body: "Mindful eating is about being present during meals, savoring each bite, and noticing flavors, textures, and fullness cues. This practice improves digestion by allowing the body to break down food more effectively. It also prevents overeating, as slowing down gives the brain time to register when you're full. Mindful eating can make meals more satisfying, reduce stress around food, and foster a healthier relationship with what you eat.",
      imageName: "eat-mindfully" 
    },
    { 
      title: "Practice Deep Breathing to Reduce Stress", 
      summary: "Deep breathing can reduce stress, promote relaxation, and improve focus.",
      body: "Deep breathing exercises help activate the parasympathetic nervous system, which promotes relaxation and lowers stress levels. Taking slow, intentional breaths calms the mind, reduces muscle tension, and brings more oxygen to the brain, improving concentration. It’s a simple yet effective tool that can be done anywhere to help manage anxiety or stress. Incorporating a few minutes of deep breathing each day can have lasting benefits for both mental and physical well-being.",
      imageName: "deep-breath" 
    },
];
  
  

/*--------snippets page------------ */
const container = document.querySelector("#snippets-container");
if (container) {
    const modalBackdrop = document.querySelector("#modal-backdrop");
    const modalBox = document.querySelector(".modal");
    const modalTitle = document.querySelector(".modal-title");
    const modalImage = document.querySelector(".modal-image");
    const modalBody = document.querySelector(".modal-body");
    const modalCloseButton = document.querySelector(".modal-close");
    
    modalCloseButton.addEventListener("click", (e) => modalBackdrop.classList.remove("show"))
    
    healthSnippets.forEach((item, index) => renderSnippet(item, index))
    
    function renderModalBox(item, index) {
        modalTitle.textContent = item.title
        modalBody.textContent = item.body
        modalImage.innerHTML = `
            <source media="(min-width: 425px)" srcset="images/${item.imageName}-lg.webp">
            <img src="images/${item.imageName}-sm.webp" alt="${item.imageName}" width="300" height="200">
        `
        modalBackdrop.classList.add("show")
    }
    
    function renderSnippet(item, index) {
        const card = document.createElement("div");
        card.className = "card";
        card.addEventListener("click", () => renderModalBox(item, index))
    
        const title = document.createElement("h2");
        title.className = "card-title";
        title.textContent = item.title;
    
        const picture = document.createElement("picture");
        picture.innerHTML =`
            <source media="(min-width: 768px)" srcset="images/${item.imageName}-sm.webp">
            <source media="(min-width: 425px)" srcset="images/${item.imageName}-lg.webp">
            <img src="images/${item.imageName}-sm.webp" alt="${item.imageName}" width="300" height="200">
        `
        picture.className = "card-image"
    
        const body = document.createElement("p");
        body.className = "card-body";
        body.textContent = item.summary;
    
        const overlay = document.createElement("div");
        overlay.className = "card-overlay";
    
        card.append(picture, overlay,title, body );
    
        container.append(card)
    }
}


  
  