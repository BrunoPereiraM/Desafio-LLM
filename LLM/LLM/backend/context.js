// backend/context.js
const axios = require('axios');
require('dotenv').config();

const HF_TOKEN = process.env.HF_TOKEN;
const DEFAULT_CONTEXT = process.env.DEFAULT_CONTEXT || '';
const HF_API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Exemplo: gpt2 small gratuito

async function getContextualizedInfo(info, userContext) {
  const context = userContext || DEFAULT_CONTEXT;
  const prompt = `Contexto: ${context}\n\nConteúdo extraído:\n${info}\n\nResuma em português, considerando o contexto acima.`;

  try {
    const response = await axios.post(
      HF_API_URL,
      { inputs: prompt, parameters: { max_new_tokens: 100 } },
      { headers: { Authorization: `Bearer ${HF_TOKEN}` } }
    );

    if (Array.isArray(response.data) && response.data[0].generated_text) {
      return response.data[0].generated_text.trim();
    }

    throw new Error('Resposta inesperada da Hugging Face');
  } catch (error) {
    console.error('Erro na consulta ao LLM gratuito:', error.response?.data || error.message);
    return 'Erro ao obter resposta do LLM gratuito.';
  }
}

module.exports = { getContextualizedInfo };