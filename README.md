## First page

For first page I used Reactive forms to proccess input, div for filter results' number, that displays only when searching.
When any articles are found, the div with cards and navigation buttons is showed. The card is a separate component, which has `@Input` fields. The buttons behave properly : previous button is disabled on first page of results, next button - on the last.

## Second page

For second page (big card with fullscreen width image with extended description ) I used fullscreen dialog with image, mat-card and button inside it.

## Filter/search

For filtering I used News service's method `getArticles(searchValue : string)`. This method is used to get all non-filtered articles as well as filter/search with keywords inside `searchValue`. The method itself sends get request (using HttpClient) to this api: `https://api.spaceflightnewsapi.net/v4/articles/?limit=${NUM_OF_ARTICLES_IN_REQUEST}&title_contains_one=${keywordString}&summary_contains_one=${keywordString}`. The limit is set to 50 articles per request, for demonstration purposes.
It returns articles containing at least one keyword in title or summary(description), or all articles if `searchValue` is empty.

## Highlighting

For text highlighting i used `HihghlightPipe` pipe. It searches keywords as separate words, so when searching for it companies for example, the word military won't be highlighted.