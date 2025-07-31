let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;

// we put the ? mark to get both https or http without the s
// for the \ it is to escape the special character of / to be shown in the url
// (?:[-\w]+\.)? adding the ? in the beginning to caputre any group of words
//[-\w]+ to get any character or word or - exist in the pattren
// \. to put the the dot after the www
// .*  the dot means any chracter the * zero or more so if it exists
