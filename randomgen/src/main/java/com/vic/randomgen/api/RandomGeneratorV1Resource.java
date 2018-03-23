package com.vic.randomgen.api;

import java.util.Random;
import java.util.concurrent.ThreadLocalRandom;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.vic.randomgen.domain.NumberRange;
import com.vic.randomgen.domain.RandomNumber;

@RestController
@RequestMapping("/api/v1")
public class RandomGeneratorV1Resource {
	
	final Logger log = LoggerFactory.getLogger(RandomGeneratorV1Resource.class);
	
	@GetMapping(path="/generate_number")
	public RandomNumber getRandomNumber() {
		return generateRandomNumber(0,20);	
	}
	
	@PostMapping(path="/generate_number")
	public RandomNumber getRandomNumberInGivenRange(@RequestBody NumberRange rangeOfNum) {
		// VALIDATE INPUT DATA
		if(rangeOfNum.getMinval() < 0 ) {
			throw new IllegalArgumentException("Minimum Value must be greater than 0");
		}			
		if (rangeOfNum.getMaxval() < 0 ) {
			throw new IllegalArgumentException("Maximum Value must be greater than 0");
		}
		if(rangeOfNum.getMinval() > rangeOfNum.getMaxval()) {
			throw new IllegalArgumentException("Minimum Value cannot be greater then Maximum Value");
		}
		return generateRandomNumber(rangeOfNum.getMinval(), rangeOfNum.getMaxval());		
	}
	
	private RandomNumber generateRandomNumber(long minVal, long maxVal) {
		RandomNumber randNumResult = new RandomNumber();
		long generatedRandomNum = ThreadLocalRandom.current().nextLong(minVal, maxVal);		
		randNumResult.setRetval(generatedRandomNum);
		return randNumResult;
	}

}
