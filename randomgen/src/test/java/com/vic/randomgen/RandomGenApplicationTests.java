package com.vic.randomgen;

import static org.junit.Assert.*;


import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;

import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.RequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;

import com.vic.randomgen.api.RandomGeneratorV1Resource;

@RunWith(SpringRunner.class)
//@SpringBootTest
@WebMvcTest(RandomGeneratorV1Resource.class)
@AutoConfigureMockMvc
public class RandomGenApplicationTests {
	@Autowired
	private MockMvc mockMvc;

	@Test
	public void contextLoads() {
	}
	
	@Test
	public void generateRandomNumberGetTest() {
		RequestBuilder requestBuilder = MockMvcRequestBuilders.get(
				"/api/v1/generate_number").accept(
				MediaType.APPLICATION_JSON);
		
		runTestbyGivenRequest(requestBuilder, 0, 20);	
	}
	
	@Test
	public void generateRandomNumberPostTest() {
		String inputJsonData = "{\"minval\":\"50\",\"maxval\":\"100\"}";
		RequestBuilder requestBuilder = MockMvcRequestBuilders
				.post("/api/v1/generate_number")
				.accept(MediaType.APPLICATION_JSON).content(inputJsonData)
				.contentType(MediaType.APPLICATION_JSON);
		runTestbyGivenRequest(requestBuilder, 50, 100);
	}
	
	private void runTestbyGivenRequest(RequestBuilder requestBuilder, long minVal, long maxVal) {
		MvcResult result = null;
		try {
			result = mockMvc.perform(requestBuilder).andReturn();
			MockHttpServletResponse response = result.getResponse();			
			Assert.assertEquals(HttpStatus.OK.value(), response.getStatus());
			
			assertTrue(response.getContentAsString().contains("{\"retval"));			
			assertEquals(HttpStatus.OK.value(), response.getStatus());
			
			String jsonStr = response.getContentAsString();
			
			JSONParser parser = new JSONParser(); 
			JSONObject json = (JSONObject) parser.parse(jsonStr);
			//System.out.println("ffff " + json);
			if(json.containsKey("retval")){
				 Long generatedNumber = (Long) json.get("retval");
				 assertTrue(generatedNumber >= minVal && generatedNumber <= maxVal);
			} else {
				throw new RuntimeException("Not a Valid JSON");
			}
			
		} catch (Exception e) {
			throw new RuntimeException(e);
		}
	}

}
