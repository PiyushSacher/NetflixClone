import OpenAI from 'openai';

const openai =new OpenAI({
  apiKey: process.env.REACT_APP_OPEN_AI, // This is the default and can be omitted
  dangerouslyAllowBrowser:true,
});


export default openai;
