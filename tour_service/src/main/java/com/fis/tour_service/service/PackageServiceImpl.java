package com.fis.tour_service.service;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fis.tour_service.dao.PackageRepository;
import com.fis.tour_service.model.Package;

@Service
public class PackageServiceImpl implements PackageService{
	
	//fake list
	@Autowired
	PackageRepository packageRepository;
	@Override
	public List<Package> getAllPackage(){
		return (List<Package>) packageRepository.findAll();
	}
	
	@Override
	public Package getPackage(String package_id) {
		Package pkg = null;
		Optional<Package> optional = packageRepository.findById(package_id);
		if(optional.isPresent()) {
			pkg = optional.get();
		}
		return pkg;
	}
	
	@Override
	public Map<Number, String> addPackage(Package p) {
		packageRepository.save(p);
		HashMap<Number, String> mp = new HashMap<>();
		mp.put(200, "Successfully added " + p.getPackage_id());
		return mp;
	}
}
