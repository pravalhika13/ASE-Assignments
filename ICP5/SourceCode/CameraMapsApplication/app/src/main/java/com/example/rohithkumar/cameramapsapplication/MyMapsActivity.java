package com.example.rohithkumar.cameramapsapplication;

import android.content.Context;
import android.content.pm.PackageManager;
import android.location.Geocoder;
import android.location.Location;
import android.location.LocationManager;
import android.os.Bundle;
import android.support.v4.app.ActivityCompat;
import android.support.v4.app.FragmentActivity;

import com.google.android.gms.maps.CameraUpdateFactory;
import com.google.android.gms.maps.GoogleMap;
import com.google.android.gms.maps.OnMapReadyCallback;
import com.google.android.gms.maps.SupportMapFragment;
import com.google.android.gms.maps.model.LatLng;
import com.google.android.gms.maps.model.MarkerOptions;

public class MyMapsActivity extends FragmentActivity implements OnMapReadyCallback {

    private GoogleMap mMap;
    public Geocoder geocoder;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_my_maps);
        // Obtain the SupportMapFragment and get notified when the map is ready to be used.
        SupportMapFragment mapFragment = (SupportMapFragment) getSupportFragmentManager()
                .findFragmentById(R.id.map);
        mapFragment.getMapAsync(this);
    }



    @Override
    public void onMapReady(GoogleMap googleMap) {
        mMap = googleMap;
        LocationManager lm = (LocationManager) getSystemService(Context.LOCATION_SERVICE);
        if (ActivityCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_FINE_LOCATION) != PackageManager.PERMISSION_GRANTED && ActivityCompat.checkSelfPermission(this, android.Manifest.permission.ACCESS_COARSE_LOCATION) != PackageManager.PERMISSION_GRANTED) {

            return;
        }
        Location myLocation = lm.getLastKnownLocation(LocationManager.GPS_PROVIDER);


        LatLng userLocation = new LatLng(myLocation.getLatitude(), myLocation.getLongitude());

        // Creating Marker with userLocation and a Title.
        MarkerOptions currentLocationMarker = new MarkerOptions()
                .position(userLocation)
                .title("User Address : Latitude : "+myLocation.getLatitude()+ " Longitude : "+myLocation.getLongitude());


        // Always show the Marker by using Show Info Window
        mMap.addMarker(currentLocationMarker).showInfoWindow();
        // Zooming the Camera [Input Params: userLocation,width,height,Padding
        mMap.animateCamera(CameraUpdateFactory.newLatLngZoom(userLocation, 14), 1500, null);

    }
}