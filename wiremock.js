import { WireMockRestClient } from 'wiremock-rest-client';

const wireMock = new WireMockRestClient('http://localhost:8080');
const stubMappings = await wireMock.mappings.getAllMappings();
console.log(stubMappings);

await wireMock.global.shutdown();