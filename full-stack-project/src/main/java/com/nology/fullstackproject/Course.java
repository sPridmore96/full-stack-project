package com.nology.fullstackproject;

import org.hibernate.annotations.GenericGenerator;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Course {

	@Id
	@GeneratedValue(generator = "system-uuid")
	@GenericGenerator(name="system-uuid", strategy = "uuid")
	private String id;
	private String createdBy;
	private String price;
	private String title;
	private String info;

	public Course() {
	}

	public Course(String id, String createdBy, String price, String title, String info) {
		this.id = id;
		this.createdBy = createdBy;
		this.price = price;
		this.title = title;
		this.info = info;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getCreatedBy() {
		return createdBy;
	}

	public void setCreatedBy(String createdBy) {
		this.createdBy = createdBy;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getOverView() {
		return info;
	}

	public void setOverView(String info) {
		this.info = info;
	}
}

