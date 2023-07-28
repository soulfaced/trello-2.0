// import { Configuration } from './node_modules/openai/configuration';
import { Configuration,OpenAIApi } from "openai";

const configuration = new Configuration({
    apiKey:process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default openai;