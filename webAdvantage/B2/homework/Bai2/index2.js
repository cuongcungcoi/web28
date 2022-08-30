let paragraph = document.getElementsByTagName("p")[0].innerText;
let arrWords = paragraph.split(" ");
function isAlphabe(char) {
  return ("a" <= char && char <= "z") || ("A" <= char && char <= "Z");
}
let highlight = arrWords.map((word) => {
  let specialChar = word[word.length - 1];
  if (isAlphabe(specialChar)) {
    return word.length >= 8
      ? `<span style="background-color : yellow;">${word}</span>`
      : word;
  } else {
    let temp = word.slice(0, word.length - 2);
    return temp.length >= 8
      ? `<span style="background-color : yellow;">${temp}</span>${specialChar}`
      : word;
  }
});
paragraph = highlight.join(" ");
paragraph = paragraph.replace(/\?/g, "🤔");
paragraph = paragraph.replace(/\!/g, "😲");
document.getElementsByTagName("p")[0].innerHTML = paragraph;
let link = document.createElement("a");
link.href = "https://www.facebook.com/";
link.textContent = "facebook";
document.querySelector("p").after(link);

let A = paragraph.match(/ /g);
let numOfwords = document.createElement("div");
numOfwords.textContent = `Đoạn văn trên có ${A.length + 1} từ`;
document.querySelector("a").after(numOfwords);
