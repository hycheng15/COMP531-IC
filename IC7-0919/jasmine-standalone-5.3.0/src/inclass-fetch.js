// Inclass Fetch Exercise
// ======================

function countWords(url) {
  return fetch(url)
    .then(res => res.json()).then(res => {
      // TODO: get the word count for each post
      //postWordCounts[postId] = postSize;
      // return an object { postId: wordCount }
      let postWordCounts = {};
      for (let i = 0; i < res.length; i++) {
        postWordCounts[i + 1] = res[i]['body'].split(' ').length;
      }

      return postWordCounts;
    });
}

function getLastLargest(url) {
  return countWords(url)
    .then(postWordCounts => {
      let largestCountSoFar = 0;
      let largestCountPostId = 0;
        
      // TODO: get all the post id keys 
      // TODO: now find the post id with longest post
      for (const [key, value] of Object.entries(postWordCounts)) {
        if (value >= largestCountSoFar) {
          largestCountSoFar = value;
          largestCountPostId = key;
        }
      }
      return largestCountPostId;
    });
}
