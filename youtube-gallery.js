document.addEventListener("DOMContentLoaded",function(){
  var groups=document.querySelectorAll("#archive details:nth-of-type(-n+2) .link-list");
  groups.forEach(function(group){
  group.classList.add("video-gallery");
  group.querySelectorAll("a").forEach(function(link){
    var url=new URL(link.href);
    var isDrive=url.hostname.includes("drive.google.com");
    var id=isDrive?url.pathname.split("/").filter(Boolean)[2]:url.hostname.includes("youtu.be")?url.pathname.slice(1):url.searchParams.get("v")||url.pathname.split("/").filter(Boolean).pop();
    if(!id)return;
    var number=link.querySelector("b");
    var title=link.textContent.replace(number?number.textContent:"","").trim();
    link.textContent="";
    var image=document.createElement("img");
    image.src=isDrive?"https://drive.google.com/thumbnail?id="+id+"&sz=w640":"https://img.youtube.com/vi/"+id+"/hqdefault.jpg";
    image.alt=title+" video thumbnail";
    image.loading="lazy";
    var visual=document.createElement("span");
    visual.className="video-visual";
    visual.appendChild(image);
    var play=document.createElement("i");
    play.textContent="▶";
    visual.appendChild(play);
    var label=document.createElement("span");
    label.className="video-label";
    if(number)label.appendChild(number);
    var text=document.createElement("strong");
    text.textContent=title;
    label.appendChild(text);
    link.appendChild(visual);
    link.appendChild(label);
  });
  });
});

