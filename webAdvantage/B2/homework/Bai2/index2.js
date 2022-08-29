let paragraph = document.getElementsByTagName("p")[0].textContent;
paragraph = paragraph.replace(/\?/g, "🤔");
paragraph = paragraph.replace(/\!/g, "😲");
document.getElementsByTagName("p")[0].textContent = paragraph;
let link = document.createElement("a");
link.href = "https://www.facebook.com/";
link.textContent = "facebook";
document.querySelector("p").after(link);

let A = paragraph.match(/ /g);
console.log(A.length);
let numOfwords = document.createElement("div");
numOfwords.textContent = `Đoạn văn trên có ${A.length + 1} từ`;
document.querySelector("a").after(numOfwords);
