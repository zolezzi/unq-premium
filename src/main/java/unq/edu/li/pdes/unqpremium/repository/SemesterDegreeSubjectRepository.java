package unq.edu.li.pdes.unqpremium.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import unq.edu.li.pdes.unqpremium.model.SemesterDegreeSubject;

public interface SemesterDegreeSubjectRepository extends JpaRepository<SemesterDegreeSubject, Long>{

	@Query("SELECT sds FROM SemesterDegreeSubject sds WHERE sds.semester.id = :semesterId")
	public List<SemesterDegreeSubject> findBySemesterId(@Param("semesterId") Long semesterId);
}
