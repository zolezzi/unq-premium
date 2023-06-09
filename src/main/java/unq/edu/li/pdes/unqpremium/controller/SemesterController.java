package unq.edu.li.pdes.unqpremium.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiImplicitParam;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import lombok.RequiredArgsConstructor;
import unq.edu.li.pdes.unqpremium.controller.response.BasicResponse;
import unq.edu.li.pdes.unqpremium.dto.SemesterDTO;
import unq.edu.li.pdes.unqpremium.dto.SemesterFilterDTO;
import unq.edu.li.pdes.unqpremium.service.impl.SemesterServiceImpl;
import unq.edu.li.pdes.unqpremium.vo.SemesterVO;

@RestController("semester")
@Api(value = "Semester Service")
@RequestMapping("/semester")
@RequiredArgsConstructor
public class SemesterController {
	
	private final SemesterServiceImpl service;

    @ApiOperation(
            value = "Service that return a Semester",
            notes = "This service return a Semester by the ID",
            nickname = "findSemesterById",
            response = SemesterDTO.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = SemesterDTO.class),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = SemesterDTO.class) })
    @ApiImplicitParam(name = "Authorization",required = true, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @GetMapping(
            value = "/find-semester-by-id/{id}",
            produces = { "application/json" }
    )
	public SemesterDTO findSemesterById(@PathVariable("id") Long id) {
		return service.findSemesterById(id);
	}
    
    @ApiOperation(
            value = "This service save a Semester",
            notes = "Service that return SemesterDTO with saved object Semester",
            nickname = "saveSemester",
            response = SemesterDTO.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = SemesterDTO.class),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = SemesterDTO.class) })
    @ApiImplicitParam(name = "Authorization",required = true, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @PostMapping(
            value = "/save-semester",
            produces = { "application/json" }
    )
    public SemesterDTO saveSemester(@RequestBody SemesterVO semester){
        return service.saveSemester(semester);
    }
    
    @ApiOperation(
            value = "This service update a Semester",
            notes = "Update a semester, if it doesn't find it throw an exception",
            nickname = "updateSemester",
            response = SemesterDTO.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = SemesterDTO.class),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = SemesterDTO.class) })
    @ApiImplicitParam(name = "Authorization",required = true, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @PutMapping(
            value = "/update-semester/{id}",
            produces = { "application/json" }
    )
    public SemesterDTO updateSemester(@RequestBody SemesterDTO semester, @PathVariable("id") Long semesterId){
        return service.updateSemester(semester, semesterId);
    }
    
    @ApiOperation(
            value = "This service delete a Semester",
            notes = "Delete a Semester, if it doesn't find it throw an exception",
            nickname = "deleteSemesterById",
            response = BasicResponse.class)
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = BasicResponse.class),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = BasicResponse.class) })
    @ApiImplicitParam(name = "Authorization",required = true, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @DeleteMapping(
            value = "/delete-semester/{id}",
            produces = { "application/json" }
    )
    public BasicResponse deleteSemesterById(@PathVariable("id") Long semesterId){
    	service.deleteSemesterById(semesterId);
        return new BasicResponse("Successfully deleted", Boolean.FALSE);
    }
    
    @ApiOperation(
            value = "Service that returns Semesters filter by year",
            notes = "This service returns Semesters filter by year",
            nickname = "searchSemestersByFilter",
            response = SemesterDTO.class, 
            responseContainer = "List")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "The request has succeeded.", response = SemesterDTO.class, responseContainer = "List"),
            @ApiResponse(code = 404, message = "Not found"),
            @ApiResponse(code = 500, message = "Internal server error.", response = SemesterDTO.class, responseContainer = "List") })
    @ApiImplicitParam(name = "Authorization",required = true, paramType = "header", dataTypeClass = String.class, example = "Bearer access_token")
    @PostMapping(
            value = "/search-semesters-by-filter",
            produces = { "application/json" }
    )
    public List<SemesterDTO> searchSemestersByFilter(@RequestBody SemesterFilterDTO filter){
        return service.searchSemestersByFilter(filter);
    }
}
