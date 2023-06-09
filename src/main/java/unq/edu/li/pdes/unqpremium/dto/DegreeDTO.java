package unq.edu.li.pdes.unqpremium.dto;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.Data;

@Data
public class DegreeDTO {

	@JsonProperty("id")
	private Long id;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("isActived")
	private Boolean isActived;
	
	@JsonProperty("subjects")
	private List<SubjectDTO> subjects;
}
