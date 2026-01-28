---
name: LLM Integration
description: Building apps with LLMs
---

# LLM Integration Skills

## Models
- **GPT-4**: High intelligence, standard for complex logic.
- **Claude**: Large context window, good writing.
- **Llama/Mistral**: Open source, hostable.

## Techniques
- **RAG (Retrieval Augmented Generation)**: Retrieve documents and pass as context to reduce hallucinations.
- **Function Calling**: Let the LLM trigger code execution (API calls, DB queries).
- **Fine-tuning**: Train on custom data for specific style or format.

## Safety
- **Prompt Injection**: Sanitize user inputs before sending to LLM.
- **Output Validation**: Always validate structured output (use JSON schemas).
- **Rate Limits**: Handle API limits gracefully.
